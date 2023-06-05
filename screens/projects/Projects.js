import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native-gesture-handler';

const Projects = () => {
  const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    margin: 10px;
    color: #8155ba;
  `;

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Title>Personal</Title>
          <Title>
            <Title> Project</Title>
          </Title>
        </View>

        <Lottie
          style={{
            width: 200,
            height: 200,
            margin: 5,
          }}
          source={require('../../assets/lottiefiles/appdev.json')}
          autoPlay
          loop
        />
      </View>
      <ScrollView>
        <View
          style={{
            margin: 5,
            borderWidth: 1,
            borderColor: 'white',
            padding: 10,
            borderRadius: 7,
          }}>
          <Text
            style={{
              color: '#67B26F',
              fontWeight: 'bold',
              fontSize: 24,
              marginBottom: 10,
            }}>
            Ecommerce App( EshopStore)
          </Text>

          <View>
            <Text style={{color: '#4ca2cd', fontSize: 16, marginBottom: 5}}>
              This is an eCommerce app I am creating. In this app, I am
              developing login and sign-up APIs using Node.js and Express.js. I
              am also creating product APIs to display the product listings. The
              app will have two sections: one for users and one for admin.
            </Text>
            <Text style={{color: '#4ca2cd', fontSize: 16, marginBottom: 5}}>
              The user section allows users to browse and purchase products. The
              admin section is for administrators who can add, edit, and delete
              products. For the frontend, I am utilizing React Native Navigation
              for routing and React Native Paper for creating visually appealing
              layouts. Additionally, I am implementing custom styles to achieve
              a unique design.
            </Text>
            <Text style={{color: '#4ca2cd', fontSize: 16, marginBottom: 5}}>
              Overall, the app aims to provide a seamless shopping experience
              for users while offering comprehensive functionality for
              administrators.
            </Text>
          </View>
        </View>

        <View
          style={{
            margin: 5,
            borderWidth: 1,
            borderColor: 'white',
            padding: 10,
            borderRadius: 7,
          }}>
          <Text
            style={{
              color: '#fdbb2d',
              fontWeight: 'bold',
              fontSize: 24,
              marginBottom: 10,
            }}>
            Instagram Clone
          </Text>
          <View>
            <Text style={{color: '#48b1bf', fontSize: 16, marginBottom: 10}}>
              This is an Instagram clone app I am creating. In this app, I am
              developing various features: Login Page: Users can log in to their
              accounts using their credentials. Post Section: Users can view
              posts shared by other users. They can like on posts.
            </Text>
            <Text style={{color: '#48b1bf', fontSize: 16, marginBottom: 10}}>
              Search Section: Users can search for specific posts or users
              within the app. Activity Section: Users can view their activity,
              such as notifications, likes, and comments on their posts.
            </Text>
            <Text style={{color: '#48b1bf', fontSize: 16, marginBottom: 10}}>
              User Profile Page: Each user has a profile page displaying their
              profile picture, username, bio, and the posts they have shared.
              Update Profile Section: Users can update their profile
              information, such as their profile picture, username, bio, and
              other details.
            </Text>
            <Text style={{color: '#48b1bf', fontSize: 16, marginBottom: 10}}>
              In this app, I have implemented custom styling to enhance the
              overall design and user experience.
            </Text>
          </View>
        </View>

        <View
          style={{
            margin: 5,
            borderWidth: 1,
            borderColor: 'white',
            padding: 10,
            borderRadius: 7,
          }}>
          <Text
            style={{
              color: '#0ED2F7',
              fontWeight: 'bold',
              fontSize: 24,
              marginBottom: 10,
            }}>
            Notes Taking App
          </Text>
          <View>
            <Text style={{color: '#22c1c3', fontSize: 16, marginBottom: 10}}>
              I am developing a notes taking app with the following features:
            </Text>
            <Text style={{color: '#22c1c3', fontSize: 16, marginBottom: 10}}>
              Login Page: Users can log in to their accounts using their
              credentials. Notes Section: Users can add, edit, and delete notes.
            </Text>
            <Text style={{color: '#22c1c3', fontSize: 16, marginBottom: 10}}>
              To enhance the user experience, I am incorporating Lottie files
              for animations. These animations will bring visual appeal and
              interactivity to the app.
            </Text>
            <Text style={{color: '#22c1c3', fontSize: 16, marginBottom: 10}}>
              For the app's design, I am creating custom styling to ensure a
              unique and visually pleasing interface.
            </Text>
            <Text style={{color: '#22c1c3', fontSize: 16, marginBottom: 10}}>
              To handle the backend functionality, I am using Node.js with
              Express.js framework to create a RESTful API for managing notes.
              The app will store the notes in a MongoDB database, providing a
              reliable and scalable data storage solution.
            </Text>
            <Text style={{color: '#22c1c3', fontSize: 16, marginBottom: 10}}>
              Overall, this notes taking app aims to provide a seamless and
              intuitive user experience while incorporating animations, custom
              styling, and a robust backend using Node.js, Express.js, and
              MongoDB.
            </Text>
          </View>
        </View>
        <View
          style={{
            margin: 5,
            borderWidth: 1,
            borderColor: 'white',
            padding: 10,
            borderRadius: 7,
          }}>
          <Text
            style={{
              color: '#5B86E5',
              fontWeight: 'bold',
              fontSize: 24,
              marginBottom: 10,
            }}>
            IPortfolio App
          </Text>
          <View>
            <Text style={{color: '#0cebeb', fontSize: 16, marginBottom: 10}}>
              I'm developing a portfolio app using React Native. The app
              consists of five main sections:
            </Text>
            <Text style={{color: '#0cebeb', fontSize: 16, marginBottom: 10}}>
              Home: This section serves as the landing page and provides an
              overview of the portfolio. It showcases key information and
              highlights my skills and expertise.
            </Text>
            <Text style={{color: '#0cebeb', fontSize: 16, marginBottom: 10}}>
              About And Education: Here, users can find detailed information
              about my education background, including my academic achievements,
              certifications, and relevant courses or degrees.
            </Text>
            <Text style={{color: '#0cebeb', fontSize: 16, marginBottom: 10}}>
              Experience: In this section, the app showcases my professional
              experience. It includes details about previous roles, job
              responsibilities, notable projects, and significant
              accomplishments.
            </Text>
            <Text style={{color: '#0cebeb', fontSize: 16, marginBottom: 10}}>
              Contact: Users can find various ways to get in touch with me, such
              as email, phone number, and social media profiles. This section
              encourages potential employers or collaborators to reach me out.
            </Text>
            <Text style={{color: '#0cebeb', fontSize: 16, marginBottom: 10}}>
              To enhance the app's design, I'm utilizing Lottie files, which are
              animated graphics that add visual appeal and interactivity to the
              user interface. These animations help make the app look more
              attractive and engaging. Moreover, I'm implementing custom styles
              to create unique and visually appealing layouts for each page.
              This customization ensures that the app's design aligns with the
              desired aesthetic and stands out from other portfolio apps.
            </Text>
            <Text style={{color: '#0cebeb', fontSize: 16, marginBottom: 10}}>
              Additionally, I'm including a resume download section where users
              can access and download the portfolio owner's resume in PDF
              format. This feature enables employers or recruiters to easily
              save and review the portfolio owner's credentials. Overall, the
              portfolio app aims to provide a comprehensive overview of the
              portfolio owner's background, skills, experience, and projects
              while incorporating visually appealing designs and interactive
              elements using Lottie files. The inclusion of a resume download
              section adds convenience for potential employers or collaborators.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Projects;

const styles = StyleSheet.create({});
