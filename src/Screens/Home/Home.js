import React, { Component } from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import HeaderBar from '../../Header/Header';


function HomeScreen({ navigation }) {
    return (
      <View style={{flex:1}}>
      <HeaderBar navigation={ navigation } headerName='Home'/>
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center' }}>
      <Button
          onPress={() => {
            console.log(navigation)
              navigation.navigate('Notifications')
          }}
          title="Go to notifications"
        />
      </View>
       
      </View>
    );
  }
  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  export default HomeScreen;
  