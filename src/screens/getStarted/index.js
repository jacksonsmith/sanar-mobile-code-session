/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Alert,
    Image,
    StatusBar,
    StyleSheet,
    Text, TouchableOpacity,
    View,
} from 'react-native';

function GetStartedScreen({ navigation }){
  return (
    <View style={styles.sectionContainer}>
      <View style={{
        backgroundColor: '#FFFFF',
        justifyContent: 'center',
        alignContent: 'stretch'
      }}>
        <View style={{
          alignItems: 'center',
        }}>
          <Text style={styles.title}>
            Learning App
          </Text>
        </View>
        <View>
          <Text style={{
            textAlign: 'center'
          }}>
            Unlimited access to thousands of online{'\n'}
            classes
          </Text>
        </View>
        <Image style={styles.image}
          source={{uri: 'https://res.cloudinary.com/practicaldev/image/fetch/s--4ci15KBI--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/82827bnou7eq30j5lzef.png'}}
          />

        <TouchableOpacity 
        onPress ={() => navigation.navigate('LoginScreen')}
        style={styles.button}
        >
            <Text style={{color: 'white'}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 20,

  },
    button:{
      width: '80%',
        height:50,
        backgroundColor: "#67ca8f",
        borderRadius: 35,
        justifyContent: "center",
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    image: {
      width: '100%',
      height: '70%',
      marginStart: 3
    },
    title: {
      fontSize: 24,
      color: 'black',
      fontFamily: 'bold'
    }
});

export default GetStartedScreen;

