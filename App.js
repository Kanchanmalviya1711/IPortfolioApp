import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './screens/NavScreens/stackScreens/StackNavigation';
import TopHeader from './components/TopHeader';

export default function App() {
  return (
    <NavigationContainer>
      <TopHeader />
      <StackNavigation />
    </NavigationContainer>
  );
}
