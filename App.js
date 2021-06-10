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

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ceil } from 'react-native-reanimated';
import HeaderBar from './src/Header/Header';
import HomeScreen from './src/Screens/Home/Home';
import NotificationsScreen from './src/Screens/Notification/Notification';
import { createStackNavigator } from '@react-navigation/stack';

import Demo1 from './src/Screens/demoPages/demo1';
import Demo2 from './src/Screens/demoPages/demo2';
import Demo3 from './src/Screens/demoPages/demo3';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function Home() {
  return (
    <Drawer.Navigator initialRouteName="Home"
    screenOptions={{
    headerShown: false
  }}>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    {/* <Drawer.Screen name="Demo1" component={Demo1} />
    <Drawer.Screen name="Demo2" component={Demo2} />
    <Drawer.Screen name="Demo3" component={Demo3} /> */}

  </Drawer.Navigator>
  );
}
function Demo() {
  return (
    <Stack.Navigator initialRouteName="Demo1"
     screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Demo1" component={Demo1} />
    <Stack.Screen name="Demo2" component={Demo2} />
    <Stack.Screen name="Demo3" component={Demo3} />

  </Stack.Navigator>
  );
}
export default class App extends Component{
  constructor(props) {
    super(props);
   
    this.state = {
       
    }

}
render(){
  return(<NavigationContainer>
    <Drawer.Navigator
    screenOptions={{
    headerShown: false
  }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      {/* <Drawer.Screen name="Demo1" component={Demo1} /> */}
      <Drawer.Screen name="Demo1" component={Demo1} />
      <Drawer.Screen name="Demo2" component={Demo2} />
      <Drawer.Screen name="Demo3" component={Demo3} />

      {/* <Drawer.Screen name="Demo" component={Demo} /> */}
    </Drawer.Navigator>
  </NavigationContainer>)
}
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

// export default App;
