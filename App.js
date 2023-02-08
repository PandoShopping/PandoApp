import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ProfileHomeScreen, MyListingsScreen, BrowseListingsScreen } from "./screens"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Amplify } from 'aws-amplify'
import awsmobile from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true,
  },
});

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Profile">
      <Tab.Screen name="Profile" component={ProfileHomeScreen} />
      <Tab.Screen name="Sell" component={MyListingsScreen} />
      <Tab.Screen name="Shop" component={BrowseListingsScreen} />
    </Tab.Navigator>
  );
}

function App() {
 return (  
  <NavigationContainer>
  <Icon name="comments" size={30} color="#900" />
  <MyTabs />
<StatusBar style="auto" />
</NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default withAuthenticator(App); 