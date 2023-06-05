import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';

const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin: 10px;
  color: #fdbb2d;
`;

const About = () => {
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Title>About Me</Title>
          <Lottie
            style={{
              width: 200,
              height: 200,
              margin: 5,
            }}
            source={require('../../assets/img/girl-academy.json')}
            autoPlay
            loop
          />
        </View>

        <Text style={styles.abouttextStyle}>
          Hey, My name is Kanchan Malviya, and I am a React Native Developer
          with two years of experience in development and design.
        </Text>
        <Text style={styles.abouttextStyle}>
          I am passionate about mobile app development and have dedicated my
          career to building robust and user-friendly applications using React
          Native.
        </Text>
        <Text style={styles.abouttextStyle}>
          Throughout my journey, I have gained extensive knowledge and hands-on
          experience in developing cross-platform mobile applications for both
          iOS and Android platforms.
        </Text>
        <Text style={styles.abouttextStyle}>
          I have worked on various projects, collaborating with diverse teams
          and clients, to deliver high-quality solutions that meet their
          specific requirements. My expertise lies in leveraging the power of
          React Native to create efficient and performant apps with a
          native-like experience.
        </Text>

        <Text style={styles.abouttextStyle}>
          I am well-versed in React Native components, libraries, and APIs, and
          proficient in implementing state management solutions such as Redux or
          MobX. I have a understanding of JavaScript and its modern frameworks,
          including React.js, which allows me to build reusable and scalable
          components.
        </Text>
        <Text style={styles.abouttextStyle}>
          I am familiar with integrating third-party APIs, implementing push
          notifications, handling asynchronous operations, and optimizing app
          performance for different devices and screen sizes. In addition to my
          technical skills, I am a strong communicator and a collaborative team
          player.
        </Text>

        <Text style={styles.abouttextStyle}>
          I thrive in agile environments, where I can contribute my ideas,
          provide valuable insights, and work closely with designers, QA
          engineers, and product managers to deliver exceptional mobile
          experiences.
        </Text>

        <Text style={styles.abouttextStyle}>
          I am continuously learning and staying up-to-date with the latest
          trends and advancements in the React Native ecosystem. I am excited
          about the opportunity to work on new projects, tackle challenging
          problems, and contribute to the success of the team.
        </Text>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  abouttextStyle: {
    margin: 10,
    color: '#22c1c3',
    fontSize: 17,
  },
});
