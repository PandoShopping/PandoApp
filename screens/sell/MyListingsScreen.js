import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AddPhotoOfListingScreen from "./AddPhotoOfListingScreen.js"
import AddListingForm from "./AddListingForm.js";
import AddImage from "../../components/functions/AddImage.js";



// import { API, graphqlOperation } from 'aws-amplify';
//import { listListings } from './graphql/queries';

//const allListings = await API.graphql(graphqlOperation(listListings));

const MyListingsScreen = () => {
return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#F5F7FA'}}>
	<Text style={{ color: "black", fontSize: 22, textAlign: "center", marginTop: 60}}>Add listing</Text>
	{/* comment copy paste */}
	<AddImage />
	{/* <AddListingForm>

	</AddListingForm> */}


	</View>
);
};

export default MyListingsScreen;