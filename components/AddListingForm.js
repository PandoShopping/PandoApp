import { FormField } from 'aws-amplify-react-native';
import React, {useState, useEffect, Component} from 'react';
import { Text, View, TextInput, Keyboard, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import TextInputExample from './functions/TextInputExample'; 
import DropdownGender from './functions/DropdownGender'; 
import DropdownCategory from './functions/DropdownCategory'; 
import NumericalInput from './functions/NumericalInput'; 
import DropdownSize from './functions/DropdownSize'; 
import MultilineTextInput from './functions/MultilineTextInput'; 


const AddListingForm = () => { 
 //  const [category, setCategory] = useState('Clothing');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

        <View style={{
            flex: 1,
            alignItems: 'left',
            justifyContent: 'center',
            paddingHorizontal: 15,
          }}>
          
            <Text style = {styles.text}>Select gender for clothing</Text>

            <DropdownGender> </DropdownGender>
            <Text style = {styles.text}>Enter Listing Name</Text>
            <MultilineTextInput title = "Little black dress with mesh cutouts, never used"> 
 </MultilineTextInput>            
            
            <Text>Select category</Text>
            <DropdownCategory>   </DropdownCategory>

            <Text style = {styles.text}>Description</Text>
            <MultilineTextInput title = "Add optional description here"> 
 </MultilineTextInput>

            <Text style = {styles.text}>Original Price</Text>

            <NumericalInput title = "Original Price"> </NumericalInput>
            <Text style = {styles.text}>Listing Price</Text>

            <NumericalInput title = "Listing Price"> </NumericalInput>
           <Text style = {styles.text}>Brand</Text>
            <TextInputExample title = "Nordstrom Rack"> </TextInputExample>
           
            <Text style = {styles.text}>Size</Text>
           <DropdownSize>   </DropdownSize>

           
 

        </View>
        </TouchableWithoutFeedback>

    );
};


const styles = StyleSheet.create({
    backgroundColor: '#171717',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    
      text: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 3,
  }

  });


export default AddListingForm; 