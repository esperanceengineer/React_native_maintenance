import React, { Component } from 'react'
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage'
import uuidV4 from 'uuid/v4'

/**
 * config of firebase project
 */
const config = {
    apiKey: "AIzaSyDhFDQafGoqVpJ4VOQWStePQSj9nmzguQc",
    authDomain: "annuaire-cf555.firebaseapp.com",
    databaseURL: "https://annuaire-cf555.firebaseio.com",
    projectId: "annuaire-cf555",
    storageBucket: "annuaire-cf555.appspot.com",
    messagingSenderId: "115369109499",
    appId: "1:115369109499:web:21d95c94efe46b1f"
  };

class FirebaseConfig extends Component {
    constructor(props) {
        super(props)
        /**
         * initialize once
         */
        if(!firebase.apps.length) {
            firebase.initializeApp(config)
        }else {
            console.log("Firebase already running");
            
        }
    }
    login = async(user, success_callback, failed_callback) => {
        await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(success_callback, failed_callback);
      }

      database = () => {
          return firebase.database().ref('maintenance');
      }
    
      observeAuth = () =>
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    
      onAuthStateChanged = user => {
        if (!user) {
          try {
            this.login(user);
          } catch ({ message }) {
            console.log("Failed:" + message);
          }
        } else {
          console.log("Reusing auth...");
        }
      };
    
      createAccount = (user,signupSuccess,signupFailed) => {
        firebase.auth()
          .createUserWithEmailAndPassword(user.email, user.password)
          .then(function() {
            let userf = firebase.auth().currentUser;
            userf.updateProfile({ displayName: user.fullName,photoURL: user.avatar});
            firebase.database().ref('users/'+userf.uid).set({
              avatar:user.avatar,
              tel:user.tel,
              fullName:user.fullName,
              uid:userf.uid
            })
            .then(signupSuccess, function(error) {
              console.warn("Error update displayName.",error.message);
            });
          },signupFailed);
      }
    
      uploadImage = async uri => {
        try {
          const response = await fetch(uri);
          const blob = await response.blob();
          const ref = firebase
            .storage()
            .ref('avatar')
            .child(uuidV4());
          const snapshot = await ref.put(blob);
          let avatarUrl = await snapshot.ref.getDownloadURL()
          return avatarUrl;

        } catch (err) {
          console.log('uploadImage try/catch error: ' + err.message); //Cannot load an empty url
        }
      }
         
      onLogout = () => {
        firebase.auth().signOut().then(function() {
          console.log("Sign-out successful.");
        }).catch(function(error) {
          console.log("An error happened when signing out");
        });
      }
      
      get user() {
        let user = firebase.auth().currentUser
        let ref = firebase.database().ref('users/'+user.uid)
        let phone

        phone = ref.once('value').then(function(data){
          let tel = data.val().tel
          return tel
        }).then(function(tel){
          return tel
        })
          
          return {...user,tel:phone}
          
      }
}

export default new FirebaseConfig()