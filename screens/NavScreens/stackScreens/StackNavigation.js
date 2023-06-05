import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from '../tabScreens/TabNavigation';
import ResumeSample from '../../../components/ResumeSample';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResumeSample"
        component={ResumeSample}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
