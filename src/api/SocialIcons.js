/*Example of Social Icon*/
import React, { Component } from 'react';
//import react in our project
import { StyleSheet, View, Text, ScrollView } from 'react-native';
//import basic react native components
import { SocialIcon } from 'react-native-elements';
//import to show social icons

export default class AboutScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.MainContainer}>
          <Text style={{ fontSize: 20, marginBottom: 20, textAlign: 'center' }}>
            Attractive Social Icons from React Native Elements
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  //Social Icon using react-native-elements
                  type="angellist"
                  //Type of Social Icon
                  onPress={() => {
                    //Action to perform onPress of the Icon
                    alert('angellist');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>angellist</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="codepen"
                  onPress={() => {
                    alert('codepen');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>codepen</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="envelope"
                  onPress={() => {
                    alert('envelope');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>envelope</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="etsy"
                  onPress={() => {
                    alert('etsy');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>etsy</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="facebook"
                  onPress={() => {
                    alert('facebook');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>facebook</Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="foursquare"
                  onPress={() => {
                    alert('foursquare');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>foursquare</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="github-alt"
                  onPress={() => {
                    alert('github');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>github-alt</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="github"
                  onPress={() => {
                    alert('github');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>github</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="gitlab"
                  onPress={() => {
                    alert('gitlab');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>gitlab</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="instagram"
                  onPress={() => {
                    alert('instagram');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>instagram</Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="linkedin"
                  onPress={() => {
                    alert('linkedin');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>linkedin</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="medium"
                  onPress={() => {
                    alert('medium');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>medium</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="pinterest"
                  onPress={() => {
                    alert('pinterest');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>pinterest</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="quora"
                  onPress={() => {
                    alert('quora');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>quora</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="reddit-alien"
                  onPress={() => {
                    alert('reddit');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>reddit-alien</Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="soundcloud"
                  onPress={() => {
                    alert('soundcloud');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>soundcloud</Text>
              </View>

              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="steam"
                  onPress={() => {
                    alert('steam');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>steam</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="youtube"
                  onPress={() => {
                    alert('youtube');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>youtube</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="tumblr"
                  onPress={() => {
                    alert('tumblr');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>tumblr</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="twitch"
                  onPress={() => {
                    alert('twitch');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>twitch</Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="twitter"
                  onPress={() => {
                    alert('twitter');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>twitter</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="vimeo"
                  onPress={() => {
                    alert('vimeo');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>vimeo</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="wordpress"
                  onPress={() => {
                    alert('wordpress');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>wordpress</Text>
              </View>
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <SocialIcon
                  type="stumbleupon"
                  onPress={() => {
                    alert('stumbleupon');
                  }}
                />
                <Text style={{ textAlign: 'center' }}> stumbleupon</Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}>
                  <SocialIcon
                    type="stack-overflow"
                    onPress={() => {
                      alert('stack');
                    }}
                  />
                  <Text style={{ flex: 1, textAlign: 'center' }}>
                    stack-overflow
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}>
                  <SocialIcon
                    type="google-plus-official"
                    onPress={() => {
                      alert('google');
                    }}
                  />
                  <Text style={{ textAlign: 'center' }}>
                    google-plus-official
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In angellist"
              button
              type="angellist"
              onPress={() => {
                alert('angellist');
              }}
            />
            <Text style={{ textAlign: 'center' }}>angellist</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In codepen"
              button
              type="codepen"
              onPress={() => {
                alert('codepen');
              }}
            />
            <Text style={{ textAlign: 'center' }}>codepen</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In envelope"
              button
              type="envelope"
              onPress={() => {
                alert('envelope');
              }}
            />
            <Text style={{ textAlign: 'center' }}>envelope</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In etsy"
              button
              type="etsy"
              onPress={() => {
                alert('etsy');
              }}
            />
            <Text style={{ textAlign: 'center' }}>etsy</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              //Social Icon using react-native-elements
              button
              //To make a button type Social Icon
              title="Sign In facebook"
              //Title of Social Button
              type="facebook"
              //Type of Social Icon
              onPress={() => {
                //Action to perform on press of Social Icon
                alert('facebook');
              }}
            />
            <Text style={{ textAlign: 'center' }}>facebook</Text>
          </View>

          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In foursquare"
              button
              type="foursquare"
              onPress={() => {
                alert('foursquare');
              }}
            />
            <Text style={{ textAlign: 'center' }}>foursquare</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In Github Alt"
              alt
              button
              type="github-alt"
              onPress={() => {
                alert('github-alt');
              }}
            />
            <Text style={{ textAlign: 'center' }}>github-alt</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In github"
              button
              type="github"
              onPress={() => {
                alert('github');
              }}
            />
            <Text style={{ textAlign: 'center' }}>github</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In gitlab"
              button
              type="gitlab"
              onPress={() => {
                alert('gitlab');
              }}
            />
            <Text style={{ textAlign: 'center' }}>gitlab</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In instagram"
              button
              type="instagram"
              onPress={() => {
                alert('instagram');
              }}
            />
            <Text style={{ textAlign: 'center' }}>instagram</Text>
          </View>

          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In linkedin"
              button
              type="linkedin"
              onPress={() => {
                alert('linkedin');
              }}
            />
            <Text style={{ textAlign: 'center' }}>linkedin</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In medium"
              button
              type="medium"
              onPress={() => {
                alert('medium');
              }}
            />
            <Text style={{ textAlign: 'center' }}>medium</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In pinterest"
              button
              type="pinterest"
              onPress={() => {
                alert('pinterest');
              }}
            />
            <Text style={{ textAlign: 'center' }}>pinterest</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In quora"
              button
              type="quora"
              onPress={() => {
                alert('quora');
              }}
            />
            <Text style={{ textAlign: 'center' }}>quora</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In reddit-alien"
              button
              type="reddit-alien"
              onPress={() => {
                alert('reddit');
              }}
            />
            <Text style={{ textAlign: 'center' }}>reddit-alien</Text>
          </View>

          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In soundcloud"
              button
              type="soundcloud"
              onPress={() => {
                alert('soundcloud');
              }}
            />
            <Text style={{ textAlign: 'center' }}>soundcloud</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In Stack Overflow"
              button
              type="stack-overflow"
              onPress={() => {
                alert('stack-overflow');
              }}
            />
            <Text style={{ textAlign: 'center' }}>stack-overflow</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In steam"
              button
              type="steam"
              onPress={() => {
                alert('steam');
              }}
            />
            <Text style={{ textAlign: 'center' }}>steam</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In youtube"
              button
              type="youtube"
              onPress={() => {
                alert('youtube');
              }}
            />
            <Text style={{ textAlign: 'center' }}>youtube</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In tumblr"
              button
              type="tumblr"
              onPress={() => {
                alert('tumblr');
              }}
            />
            <Text style={{ textAlign: 'center' }}>tumblr</Text>
          </View>

          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In twitch"
              button
              type="twitch"
              onPress={() => {
                alert('twitch');
              }}
            />
            <Text style={{ textAlign: 'center' }}>twitch</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In twitter"
              button
              type="twitter"
              onPress={() => {
                alert('twitter');
              }}
            />
            <Text style={{ textAlign: 'center' }}>twitter</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In Google Plus"
              button
              type="google-plus-official"
              onPress={() => {
                alert('google');
              }}
            />
            <Text style={{ textAlign: 'center' }}>google-plus-official</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In vimeo"
              button
              type="vimeo"
              onPress={() => {
                alert('vimeo');
              }}
            />
            <Text style={{ textAlign: 'center' }}>vimeo</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In wordpress"
              button
              type="wordpress"
              onPress={() => {
                alert('wordpress');
              }}
            />
            <Text style={{ textAlign: 'center' }}>wordpress</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Sign In stumbleupon"
              button
              type="stumbleupon"
              onPress={() => {
                alert('stumbleupon');
              }}
            />
            <Text style={{ textAlign: 'center' }}>stumbleupon</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
});
