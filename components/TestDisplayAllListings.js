import React, { useState, useEffect, Component } from 'react';
import { Text, View, TextInput, Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { listListings } from '../src/graphql/mutations'; 

const TestDisplayAllListings = () => { 

  const [listings, setListings] = useState([]);

  useEffect(() => { 
    fetchListings(); 
    console.log("hello hello hello"); 
  }, []); 

    //change this to a subscription 
  async function fetchListings() { 
    try { 
      const listingData = await API.graphql(grpahqlOperation(listListings)); 
      console.log(listingData);       
      const listingList = listingData.items; //idk if this is right 
      setListings(listingList); 
    } catch (e) { 
      console.log("there was an error fetching listings"); 
      console.log(e); 
      //TODO: show an error screen here instead of just console logging the error
    }
  }

  return(
    <View> 
      <Text> Test Add Listing </Text>
      {
        listings.map((listing, index) => { 
          <View> 
            <Text> {listing.id} </Text>
            <Text> {listing.name} </Text>
            <Text> {listing.description} </Text>
            <Text> {listing.category} </Text>
            <Text> {listing.price} </Text>
          </View> 
        })
      }
    </View>
  ); 
}; 

export default TestDisplayAllListings; 