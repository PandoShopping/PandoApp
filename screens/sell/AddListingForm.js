import { FormField } from 'aws-amplify-react-native';
import React, { useState, useEffect, Component } from 'react';
import { Text, View, TextInput, Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import TextInputExample from '../../components/functions/TextInputExample';
import DropdownGender from '../../components/functions/DropdownGender';
import Dropdown from '../../components/functions/Dropdown';
import NumericalInput from '../../components/functions/NumericalInput';
import DropdownSize from '../../components/functions/DropdownSize';
import MultilineTextInput from '../../components/functions/MultilineTextInput';


const AddListingForm = () => {
  //  const [category, setCategory] = useState('Clothing');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <View style={styles.backgroundView}>


        <Text style={styles.topmostText}>Select clothing gender</Text>
        <DropdownGender> </DropdownGender>
        <Text style={styles.text}>Enter Listing Name</Text>
        <MultilineTextInput title="Little black dress with mesh cutouts, never used">
        </MultilineTextInput>

        <Text style={styles.text}>Select category</Text>
        <Dropdown>   </Dropdown>

        <Text style={styles.text}>Description</Text>
        <MultilineTextInput title="Add optional description here">
        </MultilineTextInput>

        <Text style={styles.text}>What price did you or someone buy this for?</Text>
        <NumericalInput title="Original price"> </NumericalInput>
       
        <Text style={styles.text}>What price do you want to sell this for?</Text>
        <NumericalInput title="Listing price"> </NumericalInput>
        <Text style={styles.text}>Brand</Text>
        <TextInputExample title="Nordstrom Rack"> </TextInputExample>

        <Text style={styles.text}>Size</Text>
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
  fontSize: 14,

  text: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 3,
    fontFamily: "Avenir-Medium",
  }, 

  topmostText: {
    marginBottom: 5, marginLeft: 3, marginTop: 14,
    fontFamily: "Avenir-Medium",
  },

  backgroundView: { 
    alignItems: 'left',
    justifyContent: 'center',
    paddingHorizontal: 15,
  }, 
});


export default AddListingForm; 