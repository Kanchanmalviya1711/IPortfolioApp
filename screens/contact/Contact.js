import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';

const Title = styled.Text`
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #20e3b2;
`;

const Contact = () => {
  const Lurl = 'https://www.linkedin.com/in/kanchan-malviya-2095031b4';
  const openLURL = url => {
    Linking.openURL(url);
  };
  const Gurl = 'https://github.com/kanchanmalvi';
  const openGURL = url => {
    Linking.openURL(url);
  };
  const Iurl = 'https://instagram.com/malvi_ji17?igshid=NGExMmI2YTkyZg==';
  const openIURL = url => {
    Linking.openURL(url);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Title>Contact Me</Title>
        <Lottie
          style={{
            width: 250,
            height: 250,
            margin: 5,
          }}
          source={require('../../assets/lottiefiles/contactme.json')}
          autoPlay
          loop
        />
      </View>
      <View style={{margin: 10}}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginVertical: 10,
          }}>
          Contact Information
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 27,
            color: 'white',
            textAlign: 'center',
          }}>
          Email: kanchanmalviya017@gmail.com
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 27,
            color: 'white',
            textAlign: 'center',
          }}>
          Phone: +91 881-999-3978
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 27,
            color: 'white',
            textAlign: 'center',
          }}>
          Alt Phone: +91 7999-611-523
        </Text>
      </View>

      <View style={{margin: 10}}>
        <Text style={styles.contactInfo}>Connect With Me</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity onPress={() => openLURL(Lurl)}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <Lottie
                style={{
                  width: 60,
                  height: 60,
                  marginVertical: 10,
                }}
                source={require('../../assets/lottiefiles/linkedin.json')}
                autoPlay
                loop
              />
              <Text
                style={{
                  marginVertical: 10,
                  fontSize: 16,
                  color: 'white',
                }}>
                linkedin
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openGURL(Gurl)}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <Lottie
                style={{
                  width: 60,
                  height: 60,
                  marginVertical: 10,
                }}
                source={require('../../assets/lottiefiles/github.json')}
                autoPlay
                loop
              />
              <Text style={{marginVertical: 10, fontSize: 16, color: 'white'}}>
                github
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openIURL(Iurl)}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <Lottie
                style={{
                  width: 60,
                  height: 60,
                  marginVertical: 10,
                }}
                source={require('../../assets/lottiefiles/instagram.json')}
                autoPlay
                loop
              />
              <Text style={{marginVertical: 10, fontSize: 16, color: 'white'}}>
                instagram
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  contactInfo: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
