import React from 'react';
import { View, StyleSheet, ScrollView, TextInput, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { useState } from 'react'; 

const TextInputExample = (props) => {
  const [text, onChangeText] = useState("Enter words"); 
  const [words, onChangeWords] = React.useState('');

  return (
    //<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

    <View>     
  <TextInput
        style={styles.input}
        onChangeText={onChangeWords}
        value={words}
      //multiline={props.true}
        maxLength={250} 
        placeholder={props.title}
        keyboardType="default"
        
        
      /> 
 </View>
  //  </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
   // marginBottom: 10,
    width: 360,
    padding: 15,
    borderRadius: 30,
    backgroundColor: 'white',
  },
});

export default TextInputExample;