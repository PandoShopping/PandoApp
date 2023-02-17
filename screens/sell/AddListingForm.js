import { FormField } from 'aws-amplify-react-native';
import React, {useState, useEffect, Component} from 'react';
import { Text, View, TextInput, Keyboard, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import TextInputExample from '../../components/functions/TextInputExample'; 
import DropdownGender from '../../components/functions/DropdownGender'; 
import DropdownCategory from '../../components/functions/DropdownCategory'; 
import NumericalInput from '../../components/functions/NumericalInput'; 
import DropdownSize from '../../components/functions/DropdownSize'; 
import MultilineTextInput from '../../components/functions/MultilineTextInput'; 


const AddListingForm = () => { 
 //  const [category, setCategory] = useState('Clothing');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

        <View style={{
            flex: 1,
            alignItems: 'left',
            justifyContent: 'center',
            paddingHorizontal: 15,
            backgroundColor: '#f5f7fa',
          }}>
          

          <Text style = {{marginBottom: 5, marginLeft: 3}}>Select gender for clothing</Text>

            <DropdownGender> </DropdownGender>
            <Text style = {styles.text}>Enter Listing Name</Text>
            <MultilineTextInput title = "Little black dress with mesh cutouts, never used"> 
 </MultilineTextInput>            
            
 <Text style = {styles.text}>Select category</Text>
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