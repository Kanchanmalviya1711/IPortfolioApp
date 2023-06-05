import {StatusBar} from 'react-native';
import React from 'react';

const TopHeader = () => {
  return (
    <StatusBar
      backgroundColor={'black'}
      barStyle={'light-content'}
      animated={true}
    />
  );
};

export default TopHeader;
