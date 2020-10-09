import React, { createRef } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Switch, ImageBackground, Alert } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3629798182288364/6621972884';

const image = { uri: "https://picsum.photos/300/300" };

class App extends React.Component {

  click = () => {
    console.log('this is a log.');
    alert('You\'ve push the button congratulation!');
  }

  render() {
    return (
      <View>
        <View>
          <ImageBackground source={image} style={styles.picture}>
            <BannerAd
              unitId={TestIds.BANNER}
              size={BannerAdSize.FULL_BANNER}
              requestOptions={{
                requestNonPersonalizedAdsOnly: true,
              }}
            />
            <Text style={styles.title}>myapp</Text>
            <View>
              <TouchableHighlight style={styles.button} onPress={this.click}>
                <Text style={styles.textbutton}>redacted</Text>
              </TouchableHighlight>
            </View>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis ultricies sodales. Donec quis nibh turpis. Sed dictum ornare feugiat.</Text>
          </ImageBackground>
        </View>


        <View>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 25
  },
  picture: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  button: {
    width: 150,
    backgroundColor: '#7D678C',
    padding: 15,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 250
  },
  textbutton: {
    textAlign: 'center',
    fontSize: 20,
  },
  text: {
    alignItems: 'center',
    fontSize: 20,
    textAlign: 'justify',
    margin: 25
  }
});

export default App;

admob()
  .setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.PG,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: false,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,
  })
  .then(() => {
    // Request config successfully set!
  });