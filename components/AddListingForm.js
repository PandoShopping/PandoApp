import { FormField } from 'aws-amplify-react-native';
import React, {useState, Component} from 'react';
import { Text, View, TextInput, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';



const AddListingForm = () => { 
 //  const [category, setCategory] = useState('Clothing');

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);
    
    const [gender, setGender] = useState([
      {label: 'Womens', value: 'womens'},
      {label: 'Mens', value: 'mens'},
      {label: 'Other', value: 'other'}
    ]);

    const [categories, setCategory] = useState([
        {label: 'Clothing', value: 'clothing'},
        {label: 'Other', value: 'other'}
      ]);

    return (
        <View style={{
            flex: 1,
            alignItems: 'left',
            justifyContent: 'center',
            paddingHorizontal: 15,
          }}>
            <Text>Select clothing gender category</Text>
             <DropDownPicker
              multiple={true}
              min={1}
              max={3}
              mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#8ac926", "#00b4d8", "#e9c46a"]}
             
      open={open}
      value={value}
      items={gender}
      setOpen={setOpen}
      setValue={setValue}
      setGender={setGender}

    />
            <TextInput placeholder="Enter Listing Name"/>
            <TextInput placeholder="Description"/>
            <Text>Select category</Text>

<DropDownPicker
              multiple={true}
              min={1}
              max={3}
              mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#8ac926", "#00b4d8", "#e9c46a"]}
             
      open={open}
      value={value}
      items={categories}
      setOpen={setOpen}
      setValue={setValue}
      setCategory={setCategory}

    />
         
            <TextInput placeholder = "Original price" /> 
           <TextInput placeholder = "Price" /> 
           <TextInput placeholder="Brand"/> 
           <TextInput placeholder="Size"/> 
           

        </View>
    );
};


const styles = StyleSheet.create({
    backgroundColor: '#171717',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15
  });

  class Example extends Component {
  fieldRef = React.createRef();

  onSubmit = () => {
    let { current: field } = this.fieldRef;

    console.log(field.value());
  };

  formatText = (text) => {
    return text.replace(/[^+\d]/g, '');
  };

  render() {
    return (
      <OutlinedTextField
        label='Phone number'
        keyboardType='phone-pad'
        formatText={this.formatText}
        onSubmitEditing={this.onSubmit}
        ref={this.fieldRef}
      />
    );
  }
}

export default AddListingForm; 