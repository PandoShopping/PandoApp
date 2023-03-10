import React from "react";
import { Text, View } from "react-native";
import { Button, ImageViewer } from './../../components'; 
import { placeholderImage } from "../../constants";


const WelcomeScreen = () => {
return (
	<View style={styles.container}>
       <View style={styles.imageContainer}>
         <ImageViewer 
           placeholderImageSource={placeholderImage} 
         />
       </View>
       <View style={styles.footerContainer}>
         <Button theme="primary" label="Sign Up"/>
         <Button theme="primary" label="Login"/>
       </View>
     </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

export default WelcomeScreen;