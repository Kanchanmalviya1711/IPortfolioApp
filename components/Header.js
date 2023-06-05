import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  padding: 10px;
  background-color: #f0f0f0;
  margin-top: 10px;
  border-radius: 6px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
  text-align: center;
`;

const SubTitle = styled.Text`
  font-size: 17px;
  color: black;
  text-align: center;
`;

const Header = () => {
  return (
    <View
      style={{
        margin: 10,
        flex: 1,
        justifyContent: 'center',
      }}>
      <Image
        source={require('../assets/img/intro.png')}
        style={{
          width: '100%',
          height: 350,
          aspectRatio: 1,
          resizeMode: 'cover',
          alignSelf: 'center',
        }}
      />
      <View
        style={{
          margin: 10,
          padding: 5,
        }}>
        <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
          Kanchan Malviya
        </Text>
        <Text style={{color: 'white', fontSize: 17, textAlign: 'center'}}>
          Frontend Developer (React-Native)
        </Text>
      </View>
      <View
        style={{
          margin: 10,
        }}>
        <Text style={{color: 'white', fontSize: 18, lineHeight: 25}}>
          I am a Mobile App Developer with 2 years of experience in Front-End
          Development And Design.
        </Text>
      </View>
    </View>
  );
};

export default Header;
