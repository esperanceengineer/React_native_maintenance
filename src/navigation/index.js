import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import {View,Image} from 'react-native';
import HomeScreen from '../screens/Home';
import AboutScreen from '../screens/About';
import AddScreen from '../screens/Add';
import DetailsScreen from '../screens/Details';

//Stack screens
const HomeStack = createStackNavigator();
function HomeScreenStack({navigation}) {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
            headerLeft: () => (<Ionicons 
            style={{paddingLeft:10}} 
            name="ios-menu" size={30}
            color="black" 
            onPress={()=>navigation.openDrawer()}/>),

            headerRight:() => (<Ionicons 
            style={{paddingRight:10}} 
            name="ios-add-circle" size={30} 
            color="black"
            onPress={()=>navigation.navigate('Add')}
            />)
            }} />
            <HomeStack.Screen name="Details" component={DetailsScreen}/>
        </HomeStack.Navigator>
    )
}

const AboutStack = createStackNavigator();
function AboutScreenStack({navigation}) {
    return(
        <AboutStack.Navigator>
            <AboutStack.Screen name="About" component={AboutScreen} options={{
            headerLeft: () => (<Ionicons 
            style={{paddingLeft:10}} 
            name="ios-menu" size={30}
            color="black" 
            onPress={()=>navigation.openDrawer()}/>),
            title:'A propos' 
            }}/>
        </AboutStack.Navigator>
    )
}
const AddStack = createStackNavigator();
function AddScreenStack({navigation}) {
    return(
        <AddStack.Navigator>
            <AddStack.Screen name="Add" component={AddScreen} options={{
            headerLeft: () => (<Ionicons 
            style={{paddingLeft:10}} 
            name="ios-menu" size={30}
            color="black" 
            onPress={()=>navigation.openDrawer()}/>),
            title:'Ajout'
            }}/>
        </AddStack.Navigator>
    )
}

//DrawerNavigator
const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props} style={{flex:1}}>
        <View style={{flex:1,backgroundColor:'#eaeaea',alignItems:'center',padding:10}}>
            <Image
                source={require('../assets/logo.jpg')}
                style={{height:120,width:120,borderRadius:60}}
            />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home" drawerContent={props => CustomDrawerContent(props)} >
                    <Drawer.Screen name="Add"component={AddScreenStack} options={{drawerLabel:"Ajouter"}} />
                    <Drawer.Screen name="Home"component={HomeScreenStack} />
                    <Drawer.Screen name="About"component={AboutScreenStack} options={{drawerLabel:"A propos"}} />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}


