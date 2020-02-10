import React, { Component } from 'react'
import { Text, View, StyleSheet, Picker,KeyboardAvoidingView, Dimensions,TextInput,TouchableOpacity,ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const {width} = Dimensions.get('window');
import {connect} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import * as ImagePicker from 'expo-image-picker'
import {remoteAddItem} from '../actions';
import Useful from '../api/useful';
import firebase from '../api/firebase'

class AddScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type:"js",
            details:'',
            title:'',
            loading:false,
            image:''
        }
    }
    onchangeText = (key,value) => {
        this.setState({
            [key]:value
        })
    }
    addItem = () => {
        let {title,details,type,image} = this.state;
        let objet = {
            title,
            details,
            type,
            image
        }
        if (title == '' || details == '' || image == '') return;
        this.props.dispatch(remoteAddItem(objet));
        this.setState({
            title:'',
            image:'',
            details:'',
            type:''
        })
        this.props.navigation.navigate('Home');
    }

    uploadImage = async () => {
        let isConnected = await NetInfo.isConnected.fetch();
        let continued = true;
        if(isConnected) {
            if(this.state.image != '') return;
            this.setState({loading:true});
            let uploadUrl = '';
            let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
            try {
                if(permissionResult.granted  === false) {
                    Useful.displayAlert("Erreur","Permission d'accès à la camera refusée");
                    return;
                }
                let pickerResult = await ImagePicker.launchImageLibraryAsync();
                if (pickerResult.cancelled === true) return;
                uploadUrl = await firebase.uploadImage(pickerResult.uri);
                
            } catch (error) {
                Useful.displayAlert('Erreur','Rechoisissez une image');
                continued = false;
            } finally {
                this.setState({image:uploadUrl,loading:false});
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
            <Text style={styles.btnLoginText}>Ajouter</Text>
        )
    }
    render() {
        const {type,title,details} = this.state
        return (
            <SafeAreaView style={styles.container}>
                <View>
                <Text style={styles.text}>Type de Maintenance</Text>
                <Picker
                    selectedValue={type}
                    style={{height: 50}}
                    onValueChange={type =>this.setState({type})
                }>
                    <Picker.Item label="Java" value="Java" />
                    <Picker.Item label="JavaScript" value="JavaScript"/>
                    <Picker.Item label="PHP" value="PHP"/>
                    <Picker.Item label="C#" value="C#"/>
                    <Picker.Item label="Python" value="Python"/>
                </Picker>
                </View>
                <KeyboardAvoidingView style={styles.inputContainer} behavior="padding" enabled>
                    <TextInput
                        style={[styles.input,{height:50}]}
                        placeholder='Libellé'
                        placeholderTextColor='black'
                        underlineColorAndroid='transparent'
                        value={title}
                        onChangeText={val => this.onchangeText('title',val)}
                        autoCapitalize='none'
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => this.secondTextInput.focus()}
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={styles.inputContainer} behavior="padding" enabled>
                    <TextInput
                        style={styles.input}
                        placeholder='Détails'
                        placeholderTextColor='black'
                        underlineColorAndroid='transparent'
                        value={details}
                        onChangeText={val => this.onchangeText('details',val)}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        ref={input => this.secondTextInput = input}
                        onSubmitEditing={this.addItem}
                        multiline={true}
                        numberOfLines={5}
                    />
                </KeyboardAvoidingView>
                <TouchableOpacity style={[styles.btnLogin,{backgroundColor:'#eaeaea'}]} onPress={this.uploadImage} >
                    <Text style={{color:'black',fontSize: 18}}>Image</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.addItem} style={styles.btnLogin} >
                    {this.renderButtonSingup()}
                </TouchableOpacity>
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
    text: {
        color:'black',
        fontWeight:'bold',
        paddingLeft:5
    },
    inputContainer: {
        marginTop:10
    },
    input :{
        width:width,
        borderRadius:5,
        fontSize: 16,
        color:'black',
        backgroundColor:'#eaeaea',
        paddingHorizontal:5,
        marginHorizontal:5
    },
    btnLogin:{
        width:width,
        height:50,
        borderRadius: 10,
        backgroundColor: 'skyblue',
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
