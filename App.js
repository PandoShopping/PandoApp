import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ProfileHomeScreen, MyListingsScreen, AddPhotoOfListingScreen } from "./screens"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Amplify } from 'aws-amplify'
import awsmobile from './src/aws-exports'
import { withAuthenticator, SignIn, ConfirmSignUp, ConfirmSignIn, ForgotPassword } from 'aws-amplify-react-native';
import { AmplifyTheme } from 'aws-amplify-react-native';
import BrowseListingsScreen from "./screens/shop/BrowseListingsScreen"


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
      <Tab.Screen name="Sell" component={MyListingsScreen} />
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

function App() {
  return (  
    
 
   <NavigationContainer >
   <MyTabs />
 <StatusBar style="auto" />
 
 </NavigationContainer>
   );
 }



/*const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, {backgroundColor: 'white'} );
const sectionHeaderTextMod = Object.assign({}, AmplifyTheme.sectionHeaderText, {fontSize: 25});
const buttonAvailable = Object.assign({}, AmplifyTheme.button, {backgroundColor: '#156FD7', borderRadius: 8} );
const buttonResting = Object.assign({}, AmplifyTheme.buttonDisabled, {backgroundColor: '#A8C9F0', borderRadius: 8});
const sectionFooterLinkMod = Object.assign({}, AmplifyTheme.sectionFooterLink, {color: 'black'});
const MyTheme = Object.assign({}, AmplifyTheme, { 
  sectionHeader: MySectionHeader, 
  button: buttonAvailable,
  buttonDisabled: buttonResting,
  sectionFooterLink: sectionFooterLinkMod,
  sectionHeaderText: sectionHeaderTextMod,

});
<withAuthenticator theme={MyTheme} />*/

const customTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: '#156FD7',
    borderRadius: 8,
    alignItems: 'center',
		padding: 16,
  },
  buttonDisabled: {
    backgroundColor: '#A8C9F0', 
    borderRadius: 8,
    alignItems: 'center',
		padding: 16,
  },
  sectionHeaderText: {
    fontSize: 25,
  },
  sectionFooter: {
		width: '100%',
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 15,
		marginBottom: 20,
	},
	sectionFooterLink: {
		fontSize: 14,
		color: 'black',
		alignItems: 'baseline',
		textAlign: 'center',
	},
	sectionFooterLinkDisabled: {
		fontSize: 14,
		color: 'gray',
		alignItems: 'baseline',
		textAlign: 'center',
	},
};

export default withAuthenticator(App, false, [], null, customTheme);