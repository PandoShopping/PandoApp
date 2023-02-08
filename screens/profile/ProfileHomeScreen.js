import React from "react";
import { Alert } from 'react-native';

import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Auth } from 'aws-amplify'; 
import Button from './../../components/Button'

const ProfileHomeScreen = () => {

  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      alert(error); 
    }
  };


return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
	<Text style={{ color: "#006600", fontSize: 40 }}>ProfileHomeScreen</Text>
	<Ionicons name="md-home" size={80} color="#006600" />
  <Button theme="primary" label="Log Out" onPress={signOut}/>
	</View>
);
};

export default ProfileHomeScreen;