import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AddListingForm from "./AddListingForm.js";
import AddImage from "../../components/functions/AddImage.js";

const MyListingsScreen = () => {
return (
  <SafeAreaView style={styles.container}>
  <ScrollView>
    <Text style={styles.text}>UPLOAD LISTING</Text>
	  <AddImage />
	  <AddListingForm />   
  </ScrollView>
</SafeAreaView>
);
};

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    /*
      flex-1 sets three different flex properties (flex-grow, flex-shrink, flex-basis) at once 
      flex-grow: 1 -> item will grow at same rate as any other item 
      flex-shrink: 1 -> item will shrink at same rate as any other item 
      flex-basis: 0 -> item starts with no size, grows to fill availble space 
    */
   backgroundColor: 'fff'
  }, 
  text: { 
    color: "black", 
    fontSize: 22, 
    fontFamily: "Avenir Next",
    fontWeight: "bold", 
    textAlign: "right", 
    marginRight: 30, 
  }
})



export default MyListingsScreen;