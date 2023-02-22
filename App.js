import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ProfileHomeScreen, AddListingScreen, BrowseListingsScreen} from "./screens"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Amplify } from 'aws-amplify'
import awsmobile from './src/aws-exports'
import { withAuthenticator, SignIn, ConfirmSignUp, ConfirmSignIn, ForgotPassword } from 'aws-amplify-react-native';
import { AmplifyTheme } from 'aws-amplify-react-native';

Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true,
  }
});

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Profile">
      <Tab.Screen name="Shop" component={BrowseListingsScreen} />
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