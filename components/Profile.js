import React from "react";
import { Alert, Image} from 'react-native';
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Auth } from 'aws-amplify'; 
import Button from './Button'
import LogOut from "@expo/vector-icons/Feather";
import { HStack, VStack } from "@react-native-material/core";
import { COLORS } from "../constants/theme";
//import { pfp } from "../assets/images";


const ProfileHomeScreen = () => {

  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      alert(error); 
    }
  };
  

return (
	<View style={styles.container}>
        <Text>fuck you</Text>
      
   <Image style={{width: 100, height: 100, borderRadius: 400/ 2}} 
 source={require('./../assets/images/pfp.png')} /> 
 <VStack spacing={10}>
    <Text>People can contact me using...</Text>

    <View style = {styles.socialsContainer}>
 <HStack spacing ={20} style = {{alignItems: "center", }}>
  <Image style={styles.socials}
 source={require('./../assets/images/ig-icon.png')} /> 
     <Image style={styles.socials} 
 source={require('./../assets/images/fb-icon.png')} /> 
     <Image style={styles.socials}
 source={require('./../assets/images/im-icon.png')} /> 
       </HStack>
 </View>
 </VStack>
 
  

       <Button theme="primary" label="Sign out" onPress={signOut} icon = { <LogOut
            name={"log-out"}
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />}/>
  
	</View>
);
};



const styles = StyleSheet.create({
    container:{
        flex: 1, 
        width: 360,
        // for testing:  
      //backgroundColor: 'blue',
    },

    socialsContainer:{
backgroundColor: COLORS.buttonPrimaryLight,
borderRadius: 25,
height: 100,
    justifyContent: 'center',
    paddingLeft:20
    },
  buttonIcon: {
    paddingRight: 10,
    marginBottom: 0,
    
  }, //don't delete this

  socials:{
    width: 55,
    height: 55,
    borderRadius: 400/2,
  }

})


export default ProfileHomeScreen;