import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
<<<<<<< Updated upstream
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
=======
 import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
 //import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

//import {PaperProvider} from 'react-native-paper';

>>>>>>> Stashed changes
import { ProfileHomeScreen, AddListingScreen, BrowseListingsScreen} from "./screens"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Amplify } from 'aws-amplify'
import awsmobile from './src/aws-exports'
import { withAuthenticator, SignIn, ConfirmSignUp, ConfirmSignIn, ForgotPassword } from 'aws-amplify-react-native';
import { AmplifyTheme } from 'aws-amplify-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BlurView } from 'expo-blur';

import { COLORS } from "./constants";
Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true,
  }
});



const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato' ,
    accent: 'tomato' ,
  },
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
   // <PaperProvider theme={DefaultTheme}>

  //  </PaperProvider>


  
  
  <Tab.Navigator
    initialRouteName="Shop"
    barStyle={{ backgroundColor: 'tomato' }}

    activeColor="#e91e63"

    screenOptions={{
      tabBarActiveTintColor: COLORS.buttonPrimaryMedium,
      backgroundColor: 'green'
    }}

  >

      <Tab.Screen
        name="Shop"
        component={BrowseListingsScreen}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />


     <Tab.Screen name="Sell" component={AddListingScreen} />
     <Tab.Screen name="Profile" component={ProfileHomeScreen} />
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
     
    <PaperProvider  theme={theme}>
<NavigationContainer theme = {customTheme}>
  {/* <StatusBar style="auto" /> */}
  <MyTabs />

 </NavigationContainer>

    </PaperProvider>
   
   );
 }

const customTheme = {
  ...AmplifyTheme,
  colors: {
    ...AmplifyTheme.colors,
    background: 'white'
  },
  hereig: {
    padding: 10, 
    backgroundColor: 'green'
  }
};



 export default withAuthenticator(App, false, [], null, customTheme);


 // <Tab.Navigator 
    // >
    //   <Tab.Screen name="Shop" component={BrowseListingsScreen} />
    //   <Tab.Screen name="Sell" component={AddListingScreen} />
    //   <Tab.Screen name="Profile" component={ProfileHomeScreen} />
    // </Tab.Navigator>

    // <Tab.Navigator initialRouteName="Sell"
    // activeColor="#156FD7"
    // inactiveColor="gray"
    // barStyle={{ backgroundColor: 'white' }}
    // style={{ backgroundColor: 'tomato' }}

    

  //   screenOptions={
  //     tabBarActiveBackgroundColor: 'green',
  //     // ({ route }) => ({

        
   
  //     // tabBarIcon: ({ focused, color, size }) => {
        
  //     //   let iconName;

        

  //     //   if (route.name === 'Shop') {
  //     //     iconName = focused
  //     //       ? 'ios-information-circle'
  //     //       : 'ios-information-circle-outline';
  //     //   } else if (route.name === 'Sell') {
  //     //     iconName = focused ? 'ios-list' : 'ios-list-outline';
  //     //   } else if (route.name === 'Profile')
  //     //     iconName = focused ? 'ios-list' : 'ios-list-outline';

  //     //   return <Ionicons name={iconName} size={20} color={color} />;
  //     // },

      
  //  // })
  // // }
  // >
  //   <Tab.Screen name="Shop" component={BrowseListingsScreen}  />
  //   <Tab.Screen name="Sell" component={AddListingScreen} />
  //   <Tab.Screen name="Profile" component={ProfileHomeScreen} />
  // </Tab.Navigator>