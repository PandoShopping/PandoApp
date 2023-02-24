import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ListingsViewer from "./../../components/ListingsViewer"
import Button from './../../components/Button'

export const BrowseListingsScreen = () => {
  
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ListingsViewer />
      </ScrollView>
    </View>
  );
};

export default BrowseListingsScreen;
