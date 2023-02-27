import React from 'react';
import { Text, View, StyleSheet, Image, FlatList} from "react-native";
import { COLORS, FONTS } from '../constants';
import { HStack, VStack } from '@react-native-material/core';
import { placeholderImage, newyork } from "../constants";


const Listing = (props) => {
  const listing = props;
  return (

    
  <View style={styles.container}>
       <Image style = {styles.image} source={require("./../assets/images/placeholder-image.png")} />
       <VStack spacing ={7} style = {{alignItems: "left"}}> 
       
       <Text style={styles.headerText}>{listing.name}</Text>
       <Text style={styles.brandText}>{listing.brand}</Text>
       <HStack spacing ={30} style = {{alignItems: "left",  
       justifyContent: 'space-between',
       maxWidth: 160}}> 
      {/* do not put this css in the stylesheet  */}
       <HStack spacing ={7} style = {{alignItems: "center", }}>
       <Text style={styles.originalPrice}>${listing.ogPrice}</Text>
       <Text style={styles.newPrice}>${listing.price}</Text> 
       </HStack>
       <Text style={styles.size}>Size: {listing.size}</Text>
       </HStack> 

  </VStack> 

       
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
    maxWidth: 203,
    maxHeight: 325,
    padding: 18,
    flex: 1,
    //testing don't delete:
//    backgroundColor: COLORS.buttonPrimaryLight,
  },

  image: {
    maxHeight: 200, 
    maxWidth: 150,
    borderRadius: 20,
    alignItems: 'center',
  },

  headerText: {
    fontFamily: FONTS.extraBold,
    fontSize: 14,
    width: 160,
    paddingTop: 7,

  },

  brandText: {
    fontFamily: FONTS.medium,
    color: COLORS.textSecondary,
    fontSize: 14
  },

  originalPrice: {
    fontFamily: FONTS.medium,
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid',
    color: '#F0573F',
    fontSize: 13

    
  }, 

  newPrice: {
    fontFamily: FONTS.bold,
    color: '#6AA246',
    fontSize: 13

  },

  size: {
    fontFamily: FONTS.medium,
    fontSize: 13

  },

// not used by anything yet:
  text:{
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary
  },

  // this is for testing purposes don't delete it: 
  

});


export default Listing;