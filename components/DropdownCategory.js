import React, { useState } from 'react';

import { View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(['italy', 'spain', 'barcelona', 'finland']);

  const [categories, setCategory] = useState([
    {label: 'Clothing', value: 'clothing'},
    {label: 'Other', value: 'other'}
  ]);


  return (
    <View style={{
    }}>
      <DropDownPicker
      
        open={open}
        value={value}
        items={categories}
        setOpen={setOpen}
        setValue={setValue}
        setCategory={setCategory}
        

        multiple={true}
        mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
      />
    </View>
  );
}