import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import RNFetchBlob from 'rn-fetch-blob';
import {Platform} from 'react-native';

const Homepage = () => {
  const handleDownload = async () => {
    const {dirs} = RNFetchBlob.fs;
    const fileDir =
      Platform.OS === 'android' ? dirs.DownloadDir : dirs.DocumentDir;
    const fileName = 'resume.pdf'; // Replace with the desired file name

    const fileUrl =
      'https://firebasestorage.googleapis.com/v0/b/newy-b9a62.appspot.com/o/Kresume.pdf?alt=media&token=acbb14fb-c5dd-4d15-979e-37fc448a2d5f&_gl=1*1k8xmnw*_ga*MTUzOTk5MTEwLjE2ODU0NTE3ODI.*_ga_CW55HF8NVT*MTY4NTQ1MTc4OC4xLjEuMTY4NTQ1MjAxNC4wLjAuMA..'; // Replace with the actual file URL

    const config = {
      fileCache: true,
      path: fileDir + '/' + fileName,
      overwrite: false,
    };

    try {
      const res = await RNFetchBlob.config(config).fetch('GET', fileUrl);
      console.log('File downloaded to:', res.path());
      alert('Resume downloaded');
    } catch (error) {
      console.error('Error downloading file:', error);
      alert('Resume not downloaded');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <TouchableOpacity onPress={handleDownload} style={styles.button}>
          <Text style={styles.buttonText}>Download CV</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  button: {
    backgroundColor: '#ff5e62',
    margin: 10,
    padding: 10,
    borderRadius: 7,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Homepage;
