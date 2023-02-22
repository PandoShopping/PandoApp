import React from 'react';
import { Text, View, StyleSheet} from "react-native";

const Listing = (props) => {
  const listing = props;
  return (
  <View style={styles.container}>

       <Text style={styles.text} > {listing.name} </Text>
       <Text> {listing.price} </Text> 
       <Text> {listing.ogPrice} </Text>
       <Text> {listing.brand} </Text>
       <Text> {listing.size} </Text>
       
       {/* /// unused listing vars //// */
       /* <Text> {listing.gender} </Text> */
       /* <Text> {listing.isPurchased} </Text> */}

        {/* /// this is going to go on grid after opening //// */
       /* <Text> {listing.description} </Text> 
        <Text> {listing.category} </Text> 
               <Text> {listing.storeName} </Text> */}
       
    </View> 
   
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    padding: 25,
    borderRadius: 30,

  },

  text: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 3,
    fontFamily: "Avenir-Medium",
  }, 
});


export default Listing;