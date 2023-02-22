import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Button, ImageViewer, TestDisplayAllListings } from '../../components'; 
import TestAddListingForm from "../../components/TestAddListingForm";
import AddListingForm from "../../components/AddListingForm"


const AddListingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <AddListingForm/> 
   </SafeAreaView>
  ); 
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});


export default AddListingScreen; 