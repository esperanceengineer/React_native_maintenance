/*Example of Social Icon*/
import React, { Component } from 'react';
//import react in our project
import { StyleSheet, View, Text, ScrollView,Image } from 'react-native';
//import basic react native components
import { SocialIcon } from 'react-native-elements';
//import to show social icons

export default class AboutScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.MainContainer}>
            <Image
                source={require('../assets/logo.jpg')}
                style={{height:180}}
            />
            <View style={{flex:1,flexDirection:'column',margin:5}}>
                <Text style={{fontWeight:'bold',fontSize:25,textAlign:'center',marginBottom:5}}>Maintenance</Text>
                <Text style={{fontStyle:'italic',fontSize:18}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Text style={{textAlign:'right'}}>Made of Africa</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row',flexWrap:'wrap' }}>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="github"
                  onPress={() => {
                  }}
                />
                <Text style={{ textAlign: 'center' }}>github</Text>
              </View>

              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="facebook"
                  onPress={() => {
                  }}
                />
                <Text style={{ textAlign: 'center' }}>facebook</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="instagram"
                  onPress={() => {
                  }}
                />
                <Text style={{ textAlign: 'center' }}>instagram</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="medium"
                  onPress={() => {
                  }}
                />
                <Text style={{ textAlign: 'center' }}>medium</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="linkedin"
                  onPress={() => {
                  }}
                />
                <Text style={{ textAlign: 'center' }}>linkedin</Text>
              </View>
            </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
