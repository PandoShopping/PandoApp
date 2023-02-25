import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ListingsViewer from "./../../components/ListingsViewer"
import Button from './../../components/Button'
import {COLORS, FONTS} from './../../constants/theme'
import LocationFinder from '../../components/LocationFinder'


export const BrowseListingsScreen = () => {
  
  return (
    <View style={{ flex: 1 }}>
      {/* <ScrollView> */}
        {/* <Text style = {styles.headerText}> Hi </Text> */}
        <LocationFinder/>
        <ListingsViewer />
      {/* </ScrollView> */}
    </View>
  );
};


const styles = StyleSheet.create({
  headerText: {
    fontFamily: FONTS.extraBold,
    fontSize: 16,
    width: 160,
    marginTop: 40,

  },
})

export default BrowseListingsScreen;
