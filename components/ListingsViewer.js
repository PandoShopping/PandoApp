
import React from 'react';
import Listing from './Listing';
import { FlatList, StyleSheet, View } from 'react-native';

const ListingsViewer = () => {
  const listingsToRender = [
    {
      id: 'test-00',
      name: "Oversized Seattle Crew Neck Sweater", 
      storeName: "testStoreName", 
      description:
        'test1Description',
      category: 'Clothing', 
      price: '30', 
      ogPrice: '44.95', 
      brand: 'Garage Clothing', 
      size: 'M', 
      gender: 'Womens', 
      isPurchased: 'No',
      imagePath: "'./../assets/images/placeholder-image.png'"
    },

      {
      id: 'test-01',
      name: "New York Crewneck Navy Fleece", 
      storeName: "testStoreName", 
      description:
        'test1Description',
      category: 'Clothing', 
      price: '42', 
      ogPrice: '58.45', 
      brand: 'Princess Polly', 
      size: 'XL', 
      gender: 'Womens', 
      isPurchased: 'No',
      imagePath: "'./../assets/images/newyork.png'"
    },
    {
      id: 'test-01',
      name: "New York Crewneck Navy Fleece", 
      storeName: "testStoreName", 
      description:
        'test1Description',
      category: 'Clothing', 
      price: '42', 
      ogPrice: '58.45', 
      brand: 'Princess Polly', 
      size: 'XL', 
      gender: 'Womens', 
      isPurchased: 'No',
      imagePath: "'./../assets/images/placeholder-image.png'"
    },
    {
      id: 'test-01',
      name: "New York Crewneck Navy Fleece", 
      storeName: "testStoreName", 
      description:
        'test1Description',
      category: 'Clothing', 
      price: '42', 
      ogPrice: '58.45', 
      brand: 'Princess Polly', 
      size: 'XL', 
      gender: 'Womens', 
      isPurchased: 'No',
      imagePath: "'./../assets/images/placeholder-image.png'"
    },
    {
      id: 'test-01',
      name: "New York Crewneck Navy Fleece", 
      storeName: "testStoreName", 
      description:
        'test1Description',
      category: 'Clothing', 
      price: '42', 
      ogPrice: '58.45', 
      brand: 'Princess Polly', 
      size: 'XL', 
      gender: 'Womens', 
      isPurchased: 'No',
      imagePath: "'./../assets/images/placeholder-image.png'"
    },

  ];

  const renderItem = ({ item }) => (
    <Listing
      id={item.id}
      name={item.name}
      storeName={item.storeName}
      description={item.description}
      category={item.category}
      price={item.price}
      ogPrice={item.ogPrice}
      brand={item.brand}
      size={item.size}
      gender={item.gender}
      isPurchased={item.isPurchased}
      imagePath={item.imagePath}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listingsToRender}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingLeft: 10
    
  },
});

export default ListingsViewer;