import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import { useState } from 'react'; 

const TextInputExample = (props) => {
  const [text, onChangeText] = useState("a"); 
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder={props.title}
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    width: 360,

    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});

export default TextInputExample;