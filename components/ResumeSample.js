import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';

const ResumeSample = () => {
  const source = {
    uri: 'https://drive.google.com/file/d/1OEbi64hNzJhg5EE4zppS8ek4_jPu7xR9/view?usp=share_link',
    cache: true,
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pdf
        trustAllCerts={false}
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

export default ResumeSample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
