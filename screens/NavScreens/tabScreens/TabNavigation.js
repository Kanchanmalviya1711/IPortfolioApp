import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image, StyleSheet} from 'react-native';
import Homepage from '../../homepage/Homepage';
import About from '../../about/About';
import Contact from '../../contact/Contact';
import Projects from '../../projects/Projects';
import ExpandEdu from '../../exp&Edu/ExpandEdu';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name="Homepage"
        component={Homepage}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}>
                <Image
                  source={require('../../../assets/img/home.png')}
                  style={{width: 30, height: 30}}
                />
                <Text
                  style={[
                    styles.favoriteiconStyle,
                    {color: focused ? 'black' : 'grey'},
                  ]}>
                  Home
                </Text>
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}>
                <Image
                  source={require('../../../assets/img/list.png')}
                  style={{width: 30, height: 30}}
                />
                <Text
                  style={[
                    styles.favoriteiconStyle,
                    {color: focused ? 'black' : 'grey'},
                  ]}>
                  About
                </Text>
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ExpandEdu"
        component={ExpandEdu}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}>
                <Image
                  source={require('../../../assets/img/resume.png')}
                  style={{width: 30, height: 30}}
                />
                <Text
                  style={[
                    styles.favoriteiconStyle,
                    {color: focused ? 'black' : 'grey'},
                  ]}>
                  Exp & Edu
                </Text>
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Projects"
        component={Projects}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}>
                <Image
                  source={require('../../../assets/img/projects.png')}
                  style={{width: 30, height: 30}}
                />
                <Text
                  style={[
                    styles.favoriteiconStyle,
                    {color: focused ? 'black' : 'grey'},
                  ]}>
                  projects
                </Text>
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}>
                <Image
                  source={require('../../../assets/img/comm.png')}
                  style={{width: 30, height: 30}}
                />
                <Text
                  style={[
                    styles.favoriteiconStyle,
                    {color: focused ? 'black' : 'grey'},
                  ]}>
                  Contact
                </Text>
              </View>
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  footerIcon: {
    textAlign: 'center',
  },
  iconStyle: {
    fontSize: 23,
    color: '#708090',
  },
  favoriteiconStyle: {
    textAlign: 'center',
    fontSize: 14,
  },

  none: {
    display: 'none',
  },
  flex: {
    display: 'flex',
  },
});
