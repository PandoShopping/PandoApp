import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
// import {
//   createMaterialBottomTabNavigator,
//   NavigationMaterialBottomTabOptions,
// } from 'react-navigation-material-bottom-tabs';

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

const Tab = createMaterialBottomTabNavigator();

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