import React, { Component } from 'react'
import { Text, View, StyleSheet, Picker,KeyboardAvoidingView, Dimensions,TextInput,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const {width} = Dimensions.get('window');
import {connect} from 'react-redux';
import {addItem} from '../actions'

class AddScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type:"js",
            details:'',
            title:''
        }
    }
    onchangeText = (key,value) => {
        this.setState({
            [key]:value
        })
    }
    addItem = () => {
        let {title,details,type} = this.state;
        let objet = {
            title,
            details,
            type
        }
        if (title == '' || details == '') return;
        this.props.dispatch(addItem(objet));
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
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js"/>
                    <Picker.Item label="PHP" value="php"/>
                    <Picker.Item label="C#" value="c#"/>
                    <Picker.Item label="Python" value="py"/>
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
                <TouchableOpacity onPress={this.addItem} style={styles.btnLogin} >
                    <Text style={styles.btnLoginText}>Ajouter</Text>
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
