import {useState} from 'react';
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ImageViewer = ({ placeholderImageSource, selectedImage }) => { 


	const [imageIsChosen, setImageIsChosen] = useState(false); 

  const imageSource = selectedImage !== null
  ? { uri: selectedImage }
  : placeholderImageSource;


  if (imageIsChosen === false) { 
    return (
      <View
      style={[styles.buttonContainer2]}
      // { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
    </View>
    );
  } 

  return <Image source={imageSource} style={styles.image} />;
  
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 275,
    height: 55,
    marginHorizontal: 20,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  buttonContainer2: {
    width: 320,
    height: 440,
    borderRadius: 18,
    backgroundColor: 'fff',
    padding: 3,
    
  },
  button: {
    borderRadius: 50,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 10,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 14,
  },
    image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    backgroundColor: 'fff'
  },
});
