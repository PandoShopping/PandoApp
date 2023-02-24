import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import PersonOutline from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants/theme'


const data = [
  { label: 'Womens', value: 'Womens' },
  { label: 'Mens', value: 'Mens' },
  { label: 'Other', value: 'Other'}
];

const MultiSelectComponent = () => {
  const [selected, setSelected] = useState([]);

  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
      //  inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        //search
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select gender"
        value={selected}
        onChange={item => {
          setSelected(item);
        }}
        renderLeftIcon={() => (
          <PersonOutline
            style={styles.icon}
            color= {COLORS.textSecondary}
            name="person-outline"
            size={18}
          />
        )}
        selectedStyle={styles.selectedStyle}
      />
    </View>
  );
};

export default MultiSelectComponent;

const styles = StyleSheet.create({
  container: { width: 360}, //need to make the width dynamic
  dropdown: {
    height: 50,
    backgroundColor: COLORS.buttonPrimaryLight,
    borderBottomColor: 'transparent',
    borderBottomWidth: 0.5,
    borderRadius: 30,
    paddingLeft: 18,
    paddingRight: 18,
  },
  placeholderStyle: {
    fontSize: 15,
    marginLeft: 5,
    color: COLORS.textSecondary,
    fontFamily: "Avenir-Book",
    fontSize: 14 
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,

  },
  // inputSearchStyle: {
  //   height: 40,
  //   fontSize: 16,
  // },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 30,
    
  //  backgroundColor: '#F3EDF6',
  },
});