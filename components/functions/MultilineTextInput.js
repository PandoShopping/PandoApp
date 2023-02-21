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
        multiline={true}
        maxLength={250} 
        placeholder={props.title}
        keyboardType="default"
      
        
      /> 
 </View>

  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 360,
 //   borderWidth: 1,
    padding: 15,
    paddingTop: 15, //do not delete this
    borderRadius: 30,
    backgroundColor: 'white',
    fontFamily: "Avenir-Book",
    fontSize: 14  },
});

export default TextInputExample;