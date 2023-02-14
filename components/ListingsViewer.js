import React from 'react';
import {Listing} from './Listing';

const ListingsViewer = () => {
  const listingsToRender = [
    {
      id: 'test-01',
      name: "test1Name", 
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
    {
      id: 'test-02',
      name: "test2Name", 
      description:
        'test2Description',
      category: 'test2Categroy', 
      price: 'test2Price', 
      ogPrice: 'test2gPrice', 
      brand: 'test2Brand', 
      size: 'test2Size', 
      gender: 'test2Gender', 
      isPurchased: 'test2IsPurchased'
      //TODO: chnage this to actual data that can be formatted in UI 
    }
  ];

  return (
    <div>
      {listingsToRender.map((listing) => (
        <Listing id={link.id} name={link.name} description={link.description} category={link.category} price={link.price} ogPrice={link.ogPrice} brand={link.brand} size={link.size} gender={link.gender} isPurchased={link.isPurchased}/>
      ))}
    </div>
  );
};

export default ListingsViewer;