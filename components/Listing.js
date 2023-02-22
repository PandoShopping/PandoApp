import React from 'react';
import { Text, View, StyleSheet} from "react-native";

const Listing = (props) => {
  const listing = props;
  return (
    <View styles = {styles.container}> 
       <Text> {listing.name} </Text>
       <Text> {listing.storeName} </Text>
       <Text> {listing.description} </Text>
       <Text> {listing.category} </Text>
       <Text> {listing.price} </Text>
       <Text> {listing.ogPrice} </Text>
       <Text> {listing.brand} </Text>
       <Text> {listing.size} </Text>
       <Text> {listing.gender} </Text>
       <Text> {listing.isPurchased} </Text>
    </View> 
   
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25292e',
    flex: 1,
  },
});

export default Listing;