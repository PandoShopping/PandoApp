// DEPRICATED --> GO TO AddImage.js


// import React from "react";
// import { Text, View, StyleSheet } from "react-native";
// import * as ImagePicker from 'expo-image-picker';
// import { Button, ImageViewer } from '../../components'; 
// import { placeholderImage } from "../../constants";
// import { useState } from 'react'; 

// const AddPhotoOfListingScreen = () => {

//   const [selectedImage, setSelectedImage] = useState(null); 

//   const pickImageAsync = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       allowsEditing: true, 
//       quality: 1
//     });  //passes in ImaegPickerOptions object as a parameter, gets the result object (contains info about selected image)

//     if (!result.canceled) {
//       setSelectedImage(result.assets[0].uri); 
//     } else {
//       alert('Please select or take a photo of your product!');
//     }
//   }; 


// return (
// 	<View style={styles.container}>
//        <View style={styles.imageContainer}>
//          <ImageViewer 
//            placeholderImageSource={placeholderImage} 
//            selectedImage={selectedImage}
//          />
//        </View>
//        <View style={styles.footerContainer}>
//        {/*TODO: add camera */}
//          <Button theme="primary" label="Take a photo"/>
 
//          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
//          <Button label="Use this photo" />
//        </View>
//      </View>
// );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     flex: 1,
//     paddingTop: 58,
//   },
//   image: {
//     width: 320,
//     height: 440,
//     borderRadius: 18,
//   },
//   footerContainer: {
//     flex: 1 / 3,
//     alignItems: 'center',
//   },
// });

// export default AddPhotoOfListingScreen;