import { FormField } from 'aws-amplify-react-native';
import React, {useState, useEffect, Component} from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import TextInputExample from './../components/TextInputExample'; 
import DropdownGender from './DropdownGender'; 

import DropdownCategory from './DropdownCategory'; 

const AddListingForm = () => { 
 //  const [category, setCategory] = useState('Clothing');




    return (
        <View style={{
            flex: 1,
            alignItems: 'left',
            justifyContent: 'center',
            paddingHorizontal: 15,
          }}>
          
            <Text style = {styles.text}>Select gender for clothing</Text>

            <DropdownGender> </DropdownGender>
            <Text style = {styles.text}>Enter Listing Name</Text>
            <TextInputExample title = "Enter listing name"> </TextInputExample>
            
            
            <Text>Select category</Text>
            <DropdownCategory>   </DropdownCategory>

            <Text style = {styles.text}>Description</Text>
            <TextInputExample title = "Add optional description here"> </TextInputExample>

         
            <TextInput placeholder = "Original price" /> 
           <TextInput placeholder = "Price" /> 
           <Text style = {styles.text}>Brand</Text>
            <TextInputExample title = "Enter brand name"> </TextInputExample>
           <TextInput placeholder="Size"/> 
           
 

        </View>
    );
};


const styles = StyleSheet.create({
    backgroundColor: '#171717',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },

      text: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 3,
  }

  });


export default AddListingForm; 