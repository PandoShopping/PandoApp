import React, { useState } from 'react';

import { View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [size, setSize] = useState([
    {label: 'Standard', value: 'Standard'},
   /* for later {label: '00 & below', value: '00 and below', parent: 'Standard'},
    {label: '0', value: '0', parent: 'Standard'},
    {label: '2', value: '2', parent: 'Standard'},
    {label: '4', value: '4', parent: 'Standard'},
    {label: '6', value: '6', parent: 'Standard'},
    {label: '8', value: '8', parent: 'Standard'},
    {label: '10', value: '10', parent: 'Standard'},
    {label: '12', value: '12', parent: 'Standard'},
    {label: '14+', value: '14 and above', parent: 'Standard'},  
    for later */
    {label: 'S', value: 'small', parent: 'Standard'},
    {label: 'M', value: 'medium', parent: 'Standard'},
    {label: 'L', value: 'large', parent: 'Standard'},

    {label: 'Plus', value: 'Plus'},
    {label: 'XL', value: 'x-large', parent: 'Plus'},
    {label: 'XXL', value: 'xx-large', parent: 'Plus'},
    {label: 'XXXL', value: 'xxx-large', parent: 'Plus'},

    {label: 'Petite', value: 'Petite'},
    {label: 'XS', value: 'x-small', parent: 'Petite'},
    {label: 'XXS', value: 'x-small', parent: 'Petite'},


  ]);



  return (
    <View style={{
    }}>
      <DropDownPicker


      
        open={open}
        value={value}
        items={size}
        setOpen={setOpen}
        setValue={setValue}
        setSize={setSize}
        multiple={true}
        mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
      />
    </View>
  );
}