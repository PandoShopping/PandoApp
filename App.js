import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import { CurrentRenderContext, NavigationContainer,
  useFocusEffect, } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ProfileHomeScreen, AddListingScreen, BrowseListingsScreen} from "./screens"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Amplify } from 'aws-amplify'
import awsmobile from './src/aws-exports'
import { withAuthenticator, SignIn, ConfirmSignUp, ConfirmSignIn, ForgotPassword } from 'aws-amplify-react-native';
import { AmplifyTheme } from 'aws-amplify-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from "./constants";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';

// import GetLocation from 'react-native-get-location'

// GetLocation.getCurrentPosition({
//     enableHighAccuracy: true,
//     timeout: 15000,
// })
// .then(location => {
//     console.log(location);
// })
// .catch(error => {
//     const { code, message } = error;
//     console.warn(code, message);
// })


Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true,
  }
});

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  tabBarStyle:{
    backgroundColor:'white',
    height:90,
  },
  // tabBarActiveBackgroundColor​:{
    
  // },
  tabBarItemStyle:{
    //backgroundColor:COLORS.buttonPrimaryLight,
    borderRadius:30,
    padding: 5
  },
  tabBarLabelStyle:{
    fontFamily: "Avenir-Medium",
    margin: 2
  }
  
};

const sceneContainerStyle = {
  backgroundColor: 'white',
};


function MyTabs() {
  return (

    <Tab.Navigator {...{ screenOptions, sceneContainerStyle }}>
    <Tab.Screen name="Shop" component={BrowseListingsScreen} options={{ 
      //title: "fuck shit bitch",
      headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" color={color} size={size} />
          ), 
        }}
/>
    <Tab.Screen name="Sell" component={AddListingScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="creditcard" color={color} size={size} />
          ),
        }}
/>
     <Tab.Screen name="Profile" component={ProfileHomeScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
/>

  </Tab.Navigator>

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
   <NavigationContainer>
           <MyTabs />
 
 </NavigationContainer>
   );
 }

const customTheme = {
  ...AmplifyTheme,
  colors: {
    ...AmplifyTheme.colors,
    //background: 'white'
  },
};

export default withAuthenticator(App, false, [], null, customTheme);