import React from "react";
import { Alert } from 'react-native';
<<<<<<< HEAD:screens/profile/ProfileScreen.js
import { StyleSheet, Text, View } from "react-native";
=======
>>>>>>> d00331c6f47699e4621959a9e599d308e2824e62:screens/profile/ProfileHomeScreen.js
import { Ionicons } from "@expo/vector-icons";
import { Auth } from 'aws-amplify'; 
import Button from '../../components/Button'
import LogOut from "@expo/vector-icons/Feather";
<<<<<<< HEAD:screens/profile/ProfileScreen.js
import Profile from '../../components/Profile'
=======
import { Text, View, TextInput, Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import TextInputExample from './../../components/TextInputExample';
import Amplify, { API, graphqlOperation } from 'aws-amplify'; 
import { createUser, updateUser } from  './../../src/graphql/mutations'; 
import { getUser } from './../../src/graphql/queries'; 

const initalState = { }; 
>>>>>>> d00331c6f47699e4621959a9e599d308e2824e62:screens/profile/ProfileHomeScreen.js

const ProfileHomeScreen = () => {


  async function fetchProfileInformation() { 
    try { 
      const userData = await API.graphql(grpahqlOperation(getUser)); 
      initalState = userData; 
    } catch (e) { 
      console.log(e); 
    }
  }

  async function updateListing() { 
    try { 
      const listing = { ...initalState }; 
      console.log("done");
       await API.graphql(graphqlOperation(updateUser, userData)); 
    } catch (e) { 
      console.log(e); 
    }
  }


  useEffect(() => { 
    fetchProfileInformation(); 
  }, []); 

  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      alert(error); 
    }
  };
<<<<<<< HEAD:screens/profile/ProfileScreen.js
  
=======

//move this to its own file 
  const openImagePicker = async () => {
    console.log("image picker opened"); 
    fetchProfileInformation(); 
  };

>>>>>>> d00331c6f47699e4621959a9e599d308e2824e62:screens/profile/ProfileHomeScreen.js

return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
	{/* <Text style={{ color: "#006600", fontSize: 40 }}>ProfileHomeScreen</Text> */}
	{/* <Ionicons name="md-home" size={80} color="#006600" /> */}
<<<<<<< HEAD:screens/profile/ProfileScreen.js

 <Profile/>
=======
  <Button theme="primary" label="Add a profile picture" onPress={openImagePicker} icon = { <LogOut
            name={"log-out"}
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
    />}/>
  <TextInputExample title="UniversityExample"> </TextInputExample>

	{/* this needs to be moved away to a separate component */}

  <View style = {styles.contactMethodsBox}> 
    <Text> Add Contact Methods </Text>
    <TextInputExample title="Instagram"> </TextInputExample>
    <TextInputExample title="Facebook"> </TextInputExample>
    <TextInputExample title="Phone Number"> </TextInputExample>
  </View>


  <View style = {styles.contactMethodsBox}> 
    <Text> My Orders </Text>
  </View>



>>>>>>> d00331c6f47699e4621959a9e599d308e2824e62:screens/profile/ProfileHomeScreen.js
	</View>





);
};

const styles = StyleSheet.create({
  buttonIcon: {
    paddingRight: 10,
  }, //don't delete this
  contactMethodsBox: { 
    backgroundColor: ""
  }
})


export default ProfileHomeScreen;