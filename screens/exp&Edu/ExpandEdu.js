import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Lottie from 'lottie-react-native';
import styled from 'styled-components/native';

const ExpandEdu = () => {
  const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-vertical: 5px;
    color: #acb6e5;
  `;
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
          <View>
            <Title>Experience</Title>
            <Title>And</Title>
            <Title>Education</Title>
          </View>
          <Lottie
            style={{
              width: 200,
              height: 200,
              margin: 5,
            }}
            source={require('../../assets/lottiefiles/education.json')}
            autoPlay
            loop
          />
        </View>

        {/* Work Experience section */}
        <View
          style={{
            margin: 10,
          }}>
          <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
            Work Experience
          </Text>
        </View>
        <View style={{backgroundColor: '#f7b733', margin: 5, borderRadius: 5}}>
          <View style={styles.designation}>
            <Text style={styles.designationTxt}>React Native Developer</Text>
          </View>
          <View style={styles.company}>
            <Text style={{color: '#fff', fontSize: 18}}>Company</Text>
            <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
              Newrise Technosys Pvt Ltd.
            </Text>
          </View>
          <View style={styles.duration}>
            <Text style={{color: '#fff', fontSize: 16}}>
              September/2022 - Present
            </Text>
            <Text style={{color: '#fff', fontSize: 16, marginTop: 5}}>
              Bhopal Madhya Pradesh, India
            </Text>
            <Text style={{color: '#fff', fontSize: 16, marginTop: 5}}>
              I am working as a React Native developer for the Android platform,
              and I have recently completed a project named "DPR KPMG." This
              project is construction-based, and my responsibilities included
              frontend development, API integration, and designing an amazing
              layout.
            </Text>
            <Text style={{color: '#fff', fontSize: 16, marginTop: 5}}>
              I also implemented pagination, searching functionality, and both
              dark and light mode options. Throughout this project, I have
              gained a deeper understanding of React Native and honed my skills
              in API integration.
            </Text>
            <Text style={{color: '#fff', fontSize: 16, marginTop: 5}}>
              The experience has allowed me to grasp various concepts and
              techniques related to mobile app development using React Native.
            </Text>
          </View>
        </View>

        <View style={{backgroundColor: '#f05053', margin: 5, borderRadius: 5}}>
          <View style={styles.designation}>
            <Text style={styles.designationTxt}>
              Associate Software Developer
            </Text>
          </View>
          <View style={styles.company}>
            <Text style={{color: '#fff', fontSize: 18}}>Company</Text>
            <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
              We360.ai
            </Text>
          </View>
          <View style={styles.duration}>
            <Text style={{color: '#fff', fontSize: 16}}>
              December/2021 - June/2022
            </Text>
            <Text style={{color: '#fff', fontSize: 16, marginTop: 5}}>
              Bhopal Madhya Pradesh, India
            </Text>
            <Text style={{color: '#fff', fontSize: 16, marginTop: 5}}>
              Here, I worked as an Associate Software Developer, focusing on
              learning React and JavaScript and understanding various concepts
              related to frontend development. I slso gained knowledge about
              components, file structures, and folder organization.
            </Text>
            <Text style={{color: '#fff', fontSize: 16, marginTop: 5}}>
              I have also been contributing to an existing project called the
              Employee Monitoring System, which is designed to monitor all the
              activities performed by employees within the company.
            </Text>
          </View>
        </View>

        <View style={{backgroundColor: '#40E0D0', margin: 5, borderRadius: 5}}>
          <View style={styles.designation}>
            <Text style={styles.designationTxt}>
              Inter and Ju. Software Developer
            </Text>
          </View>
          <View style={styles.companyzdc}>
            <Text style={{color: '#fff', fontSize: 18, marginHorizontal: 10}}>
              Company
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: 'bold',
                marginHorizontal: 10,
              }}>
              Kolonizer Real Bussiness Solutions
            </Text>
          </View>
          <View style={styles.duration}>
            <Text style={{color: '#fff', fontSize: 16}}>
              December/2020 - July/2021
            </Text>
            <Text style={{color: '#fff', fontSize: 16, marginTop: 5}}>
              Bhopal Madhya Pradesh, India
            </Text>
            <Text style={{color: '#fff', fontSize: 16, marginTop: 5}}>
              During my internship as a Software Developer, my primary focus was
              on learning HTML, CSS, JavaScript, and the Bootstrap Framework. I
              dedicated myself to gaining knowledge in web design, specifically
              in creating design layouts.
            </Text>
            <Text style={{color: '#fff', fontSize: 16, marginTop: 5}}>
              Additionally, I had the opportunity to contribute to an existing
              real estate project called Kolonizer. This project revolved around
              streamlining the journey of vendors and suppliers involved in the
              real estate industry.
            </Text>
          </View>
        </View>

        {/* Educcation Section */}

        <View
          style={{
            margin: 10,
          }}>
          <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
            Education
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#0575E6',
            margin: 5,
            borderRadius: 5,
          }}>
          <View style={{marginHorizontal: 10}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Bachelor's Of Engineering-(EC)
            </Text>
            <Text style={{fontSize: 15, color: 'white'}}>73.9 CGPA</Text>
            <Text style={{color: '#fff', fontSize: 18}}>
              Truba Institute of Engineering And IT
            </Text>
          </View>
          <View style={styles.university}>
            <Text style={{color: '#fff', fontSize: 16, marginTop: 10}}>
              Aug/2016 - Aug/2020
            </Text>
            <Text style={{color: '#fff', fontSize: 16, marginTop: 10}}>
              Bhopal (MP)
            </Text>
          </View>

          <View style={{marginHorizontal: 10}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              12th- State Board(PCM)
            </Text>
            <Text style={{fontSize: 15, color: 'white'}}>55.4 Percent</Text>
            <Text style={{color: '#fff', fontSize: 18}}>
              Chitransh Public Co-Ed School
            </Text>
          </View>
          <View style={styles.university}>
            <Text style={{color: '#fff', fontSize: 16, marginTop: 10}}>
              June/2015 - March/2016
            </Text>
            <Text style={{color: '#fff', fontSize: 16, marginTop: 10}}>
              Bhopal (MP)
            </Text>
          </View>

          <View style={{marginHorizontal: 10}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              10th-(State Board)
            </Text>
            <Text style={{fontSize: 15, color: 'white'}}>74.4 Percent</Text>
            <Text style={{color: '#fff', fontSize: 18}}>
              Chitransh Public Co-Ed School
            </Text>
          </View>
          <View style={styles.university}>
            <Text style={{color: '#fff', fontSize: 16, marginTop: 10}}>
              July/2013 - March/2014
            </Text>
            <Text style={{color: '#fff', fontSize: 16, marginTop: 10}}>
              Bhopal (MP)
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = {
  button: {
    backgroundColor: '#f4511e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  company: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  designation: {
    margin: 10,
  },
  designationTxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  duration: {
    margin: 10,
  },
  university: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  schooling: {
    marginHorizontal: 10,
  },
};

export default ExpandEdu;
