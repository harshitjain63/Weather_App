import React from 'react';
import {ImageBackground, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Home/Header';
import {NavigationProp} from '@react-navigation/native';
import {Images} from '../constants/images';
import PollenStatus from '../components/Home/PollenStatus';
import Temperatrure from '../components/Home/Temperatrure';
import FlatListSuggestion from '../components/Home/FlatListSuggestion';

const Home = ({navigation}: {navigation: NavigationProp<any>}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.Image}
        blurRadius={10}
        source={Images.sunnyWeather}
      />
      <Header navigation={navigation} city="Kairana" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Temperatrure />
        <PollenStatus />
        <FlatListSuggestion />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  Image: {
    ...StyleSheet.absoluteFillObject,
  },
  cardContent: {
    color: 'white',
  },
  scrollView: {flexGrow: 1},
});

export default Home;
