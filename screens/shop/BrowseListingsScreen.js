import React from "react";
import { Text, View, StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ListingsViewer from "./../../components/ListingsViewer"
import Button from './../../components/Button'

export const BrowseListingsScreen = () => {
  
return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <ListingsViewer/>
	</View>
);
 };

 const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25292e',
    flex: 1,
  },
});

 
export default BrowseListingsScreen;