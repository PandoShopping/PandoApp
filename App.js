import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
// import {
//   createMaterialBottomTabNavigator,
//   NavigationMaterialBottomTabOptions,
// } from 'react-navigation-material-bottom-tabs';

 //import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomNavigation, Text, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import React, { useState, useEffect, Component } from 'react';



import { ProfileHomeScreen, AddListingScreen, BrowseListingsScreen} from "./screens"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Amplify } from 'aws-amplify'
import awsmobile from './src/aws-exports'
import { withAuthenticator, SignIn, ConfirmSignUp, ConfirmSignIn, ForgotPassword } from 'aws-amplify-react-native';
import { AmplifyTheme } from 'aws-amplify-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from "./constants";



Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true,
  }
});

const Tab = createMaterialBottomTabNavigator();


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato' ,
    accent: 'tomato' ,
  },
};





function MyTabs() {
  // return (
  //  // <PaperProvider theme={DefaultTheme}>

  // //  </PaperProvider>

    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

  
  
  // // <Tab.Navigator
  // //   initialRouteName="Shop"
  // //   barStyle={{ backgroundColor: 'tomato' }}

  // //   activeColor="#e91e63"

  // //   screenOptions={{
  // //     tabBarActiveTintColor: COLORS.buttonPrimaryMedium,
  // //     backgroundColor: 'green'
  // //   }}

  // // >

  // //     <Tab.Screen
  // //       name="Shop"
  // //       component={BrowseListingsScreen}
  // //       options={{
  // //         tabBarLabel: 'Shop',
  // //         tabBarIcon: ({ color }) => (
  // //           <MaterialCommunityIcons name="home" color={color} size={26} />
  // //         ),
  // //       }}
  // //     />


  // //    <Tab.Screen name="Sell" component={AddListingScreen} />
  // //    <Tab.Screen name="Profile" component={ProfileHomeScreen} />
  // //   </Tab.Navigator>
  // <BottomNavigation
  //     navigationState={{ index, routes }}
  //     onIndexChange={setIndex}
  //     renderScene={renderScene}
  //   />


  // );

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline', backgroundColor: 'green'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album', color: 'green'},
    { key: 'recents', title: 'Recents', focusedIcon: 'history', color: 'green' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline', color: 'green' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: BrowseListingsScreen,
    albums: AddListingScreen,
    recents: AddListingScreen,
    notifications: ProfileHomeScreen,
  });

  // const renderTab = (route, focused, color) => { 
  //   switch (route.key) {
  //     case 'music':
  //       return <MusicRoute jumpTo={jumpTo} color={color} focused={focused} />;
  //     case 'albums':
  //       return <AlbumsRoute jumpTo={jumpTo} />;
  //   }
  // }

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

const MyAppHeader = () => {
  const {
    tokens: { space, fontSizes },
  } = useTheme();
  return (
    <View>
      <Text style={{ fontSize: fontSizes.xxxl, padding: space.xl }}>
        My Header
      </Text>
    </View>
  );
};


function App() {
  return (  
   <NavigationContainer theme = {customTheme}>
   <MyTabs />
  <StatusBar style="auto" />
 
 </NavigationContainer>
   );
 }

const customTheme = {
  ...AmplifyTheme,
  colors: {
    ...AmplifyTheme.colors,
    background: 'white'
  },
};

export default withAuthenticator(App, false, [], null, customTheme);