import React from 'react';
import Listing from './Listing';
import { Text, View, StyleSheet} from "react-native";

const ListingsViewer = () => {
  const listingsToRender = [
    {
      id: 'test-00',
      name: "Oversized Seattle Crew Neck Sweater", 
      storeName: "testStoreName", 
      description:
        'test1Description',
      category: 'Clothing', 
      price: '$30', 
      ogPrice: '$44.95', 
      brand: 'Garage Clothing', 
      size: 'M', 
      gender: 'Womens', 
      isPurchased: 'No'
    },

      {
      id: 'test-01',
      name: "test1Name", 
      storeName: "testStoreName", 
      description:
        'test1Description',
      category: 'test1Categroy', 
      price: 'test1Price', 
      ogPrice: 'test1OgPrice', 
      brand: 'test1Brand', 
      size: 'test1Size', 
      gender: 'test1Gender', 
      isPurchased: 'test1IsPurchased'
    },

    // {
    //   id: 'test-01',
    //   name: "test1Name", 
    //   storeName: "testStoreName", 
    //   description:
    //     'test1Description',
    //   category: 'test1Categroy', 
    //   price: 'test1Price', 
    //   ogPrice: 'test1OgPrice', 
    //   brand: 'test1Brand', 
    //   size: 'test1Size', 
    //   gender: 'test1Gender', 
    //   isPurchased: 'test1IsPurchased'
    // },
    // {
    //   id: 'test-02',
    //   name: "test2Name",
    //   storeName: "testStoreName",  
    //   description:
    //     'test2Description',
    //   category: 'test2Categroy', 
    //   price: 'test2Price', 
    //   ogPrice: 'test2gPrice', 
    //   brand: 'test2Brand', 
    //   size: 'test2Size', 
    //   gender: 'test2Gender', 
    //   isPurchased: 'test2IsPurchased'
    //   //TODO: chnage this to actual data that can be formatted in UI 
    // }
  ];

  return (
    <View>
      {listingsToRender.map((listing) => (
        <Listing id={listing.id} name={listing.name} storeName={listing.storeName} description={listing.description} category={listing.category} price={listing.price} ogPrice={listing.ogPrice} brand={listing.brand} size={listing.size} gender={listing.gender} isPurchased={listing.isPurchased}/>
      ))}
    </View>
  );
};

export default ListingsViewer;