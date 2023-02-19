import React, { useState, useEffect, Component } from 'react';
import { Text, View, TextInput, Keyboard, StyleSheet, TouchableWithoutFeedback, Button } from 'react-native';
import { createListing } from './../src/graphql/mutations'; 
import Amplify, { API, graphqlOperation } from 'aws-amplify'; 


const initialState = { 
  id: "", 
  name: "", 
  description: "", 
  category: "", 
  price: "", 
  ogPrice: "", 
  brand: "", 
  size: "", 
  gender: ""
}; 


const TestAddListingForm = () => { 
  const [formState, setFormState] = useState(initialState);

  async function addListing() { 
    try { 
      const listing = { ...formState }; 
      setFormState(initalState); //reset the form 
      console.log("done");
      await API.graphql(graphqlOperation(createListing, {input: listing})); 
    } catch (e) { 
      console.log(e); 
    }
  }

  const listingProperties = ["id", "number", "description", "category", "price", "ogPrice", "brand", "size", "gender"]; 

  return(
    <View> 
      { 
        listingProperties.map((property) => ( 
          <TextInput 
            key={property}
            onChangeText={(val) => setFormState({...formState, [property]: val})} 
            value = {formState[property]} 
            placeholder = {property}
          />
        ))
      }
      <Button title = "Create a Listing" onPress={addListing}> </Button>
    </View>
  ); 
}; 

export default TestAddListingForm; 


/*
notes on useEffect: 



*/ 