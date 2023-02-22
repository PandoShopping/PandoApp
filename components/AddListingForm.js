// import { FormField } from 'aws-amplify-react-native';
// import React, { useState, useEffect, Component } from 'react';
// import { Text, View, TextInput, Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import FloatLabelTextInput from 'react-native-floating-label-text-input';
// import TextInputExample from './../components/TextInputExample';
// import DropdownGender from './../components/DropdownGender';
// import DropdownCategory from './../components/DropdownCategory';
// import NumericalInput from './../components/NumericalInput';
// import DropdownSize from './../components/DropdownSize';
// // import { API, graphqlOperation } from 'aws-amplify';
// // import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
// import { Button } from 'react-native';


// const testListing = { id: "2323", name: "testName", description: "testDescription", price: 323.23, brand: "asdf" };


// // const [formData, setFormData] = React.useState({
// //   id: ID, //TODO: what is the appropriate convention here, generate an ID? 
// //   name: " ", 
// //   description: null, //TODO:is it appropriate to set as null
// //   category: 
// // }); 


// const AddListingForm = () => {
//   //  const [category, setCategory] = useState('Clothing');
//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

//       <View style={{
//         flex: 1,
//         alignItems: 'left',
//         justifyContent: 'center',
//         paddingHorizontal: 15,
//       }}>

//         <Text style={styles.text}>Select gender for clothing</Text>

//         <DropdownGender> </DropdownGender>
//         <Text style={styles.text}>Enter Listing Name</Text>
//         <TextInputExample title="Enter listing name"> </TextInputExample>


//         <Text>Select category</Text>
//         <DropdownCategory>   </DropdownCategory>

//         <Text style={styles.text}>Description</Text>
//         <TextInputExample title="Add optional description here"> </TextInputExample>

//         <Text style={styles.text}>Original Price</Text>

//         <NumericalInput title="Original Price"> </NumericalInput>
//         <Text style={styles.text}>Listing Price</Text>

//         <NumericalInput title="Listing Price"> </NumericalInput>
//         <Text style={styles.text}>Brand</Text>
//         <TextInputExample title="Enter brand name"> </TextInputExample>

//         <TextInput placeholder="Size" />
//         <DropdownSize>   </DropdownSize>


//       </View>
//     </TouchableWithoutFeedback>

//   );
// };


// // const Button = (props) => { 
// //   return  <Button
// //   title="Submit Listing"
// //   onPress={() => { 
// //     await API.graphql(graphqlOperation(createTodo, {input: todo}));
// //   }}
// // />

// // }



// const styles = StyleSheet.create({
//   backgroundColor: '#171717',
//   flex: 1,
//   alignItems: 'center',
//   justifyContent: 'center',
//   paddingHorizontal: 15,

//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },

//   text: {
//     marginTop: 10,
//     marginBottom: 5,
//     marginLeft: 3,
//   }

// });


// export default AddListingForm; 



import { FormField } from 'aws-amplify-react-native';
import React, { useState, useEffect, Component } from 'react';
import { Text, View, TextInput, Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
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

  text: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 3,
  }, 
  backgroundView: { 
    flex: 1,
    alignItems: 'left',
    justifyContent: 'center',
    paddingHorizontal: 15,
  }, 

  topmostText: {
    marginBottom: 5, marginLeft: 3, marginTop: 10
  }

  
});


export default AddListingForm; 