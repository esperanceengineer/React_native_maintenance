import React, { Component } from 'react'
import { Text, View, StyleSheet, Picker,KeyboardAvoidingView, Dimensions,TextInput,TouchableOpacity,ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Ionicons} from '@expo/vector-icons';
import {Avatar,Image} from 'react-native-elements'
import {remoteAddItem} from '../actions';
import Useful from '../api/useful';
import firebase from '../api/firebase';
const {width} = Dimensions.get('window');

class AddScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show:false,
            loading:false,
            type:"Souris",
            details:'',
            image:'',
            overviewImage:null,
            date:new Date(),
            types: [
                "Logiciel",
                "Imprimante",
                "Ordinateur portable",
                "Unité centrale",
                "Disque dur",
                "Clé Usb",
                "Station de travail",
                "Téléphone",
                "Souris"
            ]
        }
    }
    formatDate = (date) => {
        var monthNames = [
          "Janvier", "Fevrirer", "Mars",
          "Avril", "Mai", "Juin", "Juillet",
          "Août", "Septembre", "Octobre",
          "Novembre", "Decembre"
        ];
      
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
      
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      }
    onchangeText = (key,value) => {
        this.setState({
            [key]:value
        })
    }
    onChangeDate =(event,date) => {
        this.setState({date,show:false});
    }
    addItem = () => {
        let {date,details,type,image} = this.state;
        let jour = this.formatDate(date);
        let objet = {
            details,
            type,
            image,
            jour
        }
        if (details == '' || image == '') return;
       this.props.dispatch(remoteAddItem(objet));
        this.props.navigation.navigate('Home');
    }

    uploadImage = async () => {
        let isConnected = await NetInfo.isConnected.fetch();
        let continued = true;
        if(isConnected) {
            if(this.state.image != '') return;
            this.setState({loading:true});
            let uploadUrl = '';
            let overviewImageUrl = '';
            let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
            try {
                if(permissionResult.granted  === false) {
                    Useful.displayAlert("Erreur","Permission d'accès à la camera refusée");
                    return;
                }
                let pickerResult = await ImagePicker.launchImageLibraryAsync();
                if (pickerResult.cancelled === true) return;
                this.setState({overviewImage:pickerResult.uri});
                overviewImageUrl = pickerResult.uri
                uploadUrl = await firebase.uploadImage(pickerResult.uri);
                
            } catch (error) {
                Useful.displayAlert('Erreur','Rechoisissez une image');
                continued = false;
            } finally {
                this.setState({image:uploadUrl,overviewImage:overviewImageUrl,loading:false});
                if(continued) {
                    Useful.showToast('Votre image est uploadée');
                }
            }
        }else {
            Useful.displayAlert("Information","Vous n'êtes pas connecté sur internet")
        }
    }
    renderButtonSingup = () => {
        let {loading} = this.state
        if (loading) {
            return (
                <ActivityIndicator
                    animating={true}
                    size='large'
                    color='#fff'
                />
            )
        }

        return (
            <Text style={styles.btnLoginText}>Valider</Text>
        )
    }
    render() {
        const {type,details,show,date,overviewImage,types} = this.state
        return (
            <SafeAreaView style={styles.container}>

                <View>
                <Text style={styles.text}>Type d'équipement</Text>
                <Picker
                    selectedValue={type}
                    onValueChange={type =>this.setState({type})
                }>
                {
                    types.map((type,index) => <Picker.Item key={index} label={type} value={type} />)
                }
                </Picker>
                </View>
                <KeyboardAvoidingView style={[styles.inputContainer,{borderBottomColor:'#eaeaea',borderBottomWidth:2,marginBottom:5}]} behavior="padding" enabled>
                    <TextInput
                        style={styles.textArea}
                        placeholder='Ecrire le constat'
                        placeholderTextColor='gray'
                        underlineColorAndroid='transparent'
                        value={details}
                        onChangeText={val => this.onchangeText('details',val)}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={this.addItem}
                        multiline={true}
                        numberOfLines={3}
                    />
                </KeyboardAvoidingView>

                <View style={{marginVertical:5}}>
                    <Text style={styles.text}>Date de Maintenance</Text>
                    <View style={{flexDirection:'row',paddingTop:5}}>
                        <Ionicons style={{paddingLeft:10}} name="ios-calendar" size={30} color="black" onPress={()=>this.setState({show:true})}/>
                        <Text style={styles.date}>{this.formatDate(date)}</Text>
                        {show && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            timeZoneOffsetInMinutes={0}
                            value={date}
                            is24Hour={true}
                            display="default"
                            onChange={this.onChangeDate}
                            />
                        )}
                    </View>
                </View>
                <View style={{marginTop:5}}>
                    <Text style={styles.text}>Image de l'équipement</Text>
                    <View style={{flexDirection:'row',paddingLeft:5,paddingTop:5,alignItems:'center'}}>
                        <Avatar
                            size={60}
                            rounded
                            icon={{name: 'camera', type: 'font-awesome'}}
                            onPress={() => this.uploadImage()}
                            activeOpacity={0.7}
                            />
                        {
                            overviewImage != null && (
                                <View style={styles.containerImage}>
                                    <Image
                                        style={styles.thumbnail}
                                        source={{uri:overviewImage}}
                                        PlaceholderContent={<ActivityIndicator/>}
                                    />
                                </View>
                            )
                        }  
                    </View>
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={this.addItem} style={styles.btnLogin} >
                        {this.renderButtonSingup()}
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

export default connect()(AddScreen);

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
    },
    containerImage: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumbnail:{
        width:120,
        height:120,
        resizeMode:'contain'
    },
    text: {
        color:'gray',
        fontWeight:'bold',
        paddingLeft:5,
        textAlign:'left',
    },
    date: {
        color:'gray',
        fontWeight:'bold',
        paddingLeft:10,
        textAlignVertical:'center',
        fontStyle:'italic'
    },
    inputContainer: {
        marginTop:10
    },
    textArea :{
        width:width,
        borderRadius:5,
        fontSize: 14,
        color:'black',
        paddingHorizontal:5,
        marginHorizontal:5,
        textAlignVertical:'top',
    },
    btnLogin:{
        width:"80%",
        height:50,
        borderRadius: 10,
        backgroundColor: 'black',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnLoginText:{
        color:'#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }    
})
