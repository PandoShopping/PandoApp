import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import  AddListingForm  from "./../../components/AddListingForm"

// import { API, graphqlOperation } from 'aws-amplify';
//import { listListings } from './graphql/queries';

//const allListings = await API.graphql(graphqlOperation(listListings));

const MyListingsScreen = () => {
return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
	<Text style={{ color: "#006600", fontSize: 40 }}>Listings</Text>

	<AddListingForm>

	</AddListingForm>


	</View>
);
};

export default MyListingsScreen;