import { React, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageViewer from "../../components/ImageViewer"
import { placeholderImage } from "../../constants";
import { Button } from '../../components';
import * as ImagePicker from 'expo-image-picker';

const AddImage = () => {

	const [selectedImage, setSelectedImage] = useState(null); 
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, 
      quality: 1
    });  //passes in ImaegPickerOptions object as a parameter, gets the result object (contains info about selected image)

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri); 
    } else {
      alert('Please select or take a photo of your product!');
    }
  };

  return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#F5F7FA'}}>
	{/* comment copy paste */}
	<View style={styles.imageContainer}>
         <ImageViewer 
           placeholderImageSource={placeholderImage} 
           selectedImage={selectedImage}
         />

         
       </View>
	   <View style ={styles.footerContainer}>
       {/*TODO: add camera */}
         <Button theme="primary" label="Take a photo"/>
         <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
         <Button theme="bigAss" label="choose 4" onPress={pickImageAsync}/>
       </View>

	</View>
);
};


const styles = StyleSheet.create({
	imageContainer: {
	  flex: 1,
	  paddingTop: 58,
	},
	image: {
	  width: 320,
	  height: 420,
	  borderRadius: 18,
	},
	footerContainer: {
	  alignItems: 'center',
	},
  });

  export default AddImage;