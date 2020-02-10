import React, { Component } from 'react'
import { Alert,ToastAndroid } from 'react-native'

class Useful extends Component {

  displayAlert = (tile,message) => {
    Alert.alert(
        tile,
        message,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {text: 'OK'},
        ],
        {cancelable: false},
      );
  }

  /**
     * display the toast android
     */
    showToast = (message) => {
      ToastAndroid.showWithGravity(
          message,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM
      )
  }
}

export default new Useful();