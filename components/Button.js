import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { VStack } from '@react-native-material/core';
import {COLORS} from '../constants/theme'
import LogOut from "@expo/vector-icons/Feather";

const icons = { 


}

export default function Button({ label, theme, onPress, icon}) {
  if (theme === "primary") { 
    return (
      <View
      style={[styles.lightButtonContainer]}
      >
        <Pressable
          style={[styles.button, {  }]}
          onPress={onPress}>
         {icon}
          <Text style={[styles.primaryButtonLabel]}>{label}</Text>
        </Pressable>
    </View>
    );
  } 

  else if (theme === "secondary") { 
    return (
      <View
      style={[styles.mediumButtonContainer]}
      >
        <Pressable
          style={[styles.button, {  }]}
          onPress={onPress}>
         {icon}
          <Text style={[styles.tertiaryButtonLabel]}>{label}</Text>
        </Pressable>
    </View>
    );
  }

  else if (theme === "bigAss") { 
    return (
      <View style={[styles.biggerButtonContainer]}>
        <Pressable style={[styles.button, { backgroundColor: COLORS.buttonPrimaryLight }]} onPress={onPress} > 
              <VStack spacing ={5} style = {{alignItems: "center"}} > 
              <Image style={{width: 180, height: 136}} source={require("./../assets/images/megacreator.png")} />
               <Text style={[styles.primaryButtonLabel]}>New image</Text>
                <Text style={[styles.secondaryButtonLabel]}>{label}
                </Text>
                </VStack>
           </Pressable>
    </View>
    );
  } 

  return (
    // onPress={() => alert('You pressed a button.')}
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  lightButtonContainer: {
    width: 360,
    height: 50,
  //  marginHorizontal: 20,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: COLORS.buttonPrimaryLight,
    borderRadius: 20
  },

  mediumButtonContainer:{

    width: 360,
    height: 50,
  //  marginHorizontal: 20,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: COLORS.buttonPrimaryMedium,
    borderRadius: 20

  },

  biggerButtonContainer: {
    width: 360,
    height: 300,
  },

  button: {
    borderRadius: 50,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  flexDirection: 'row',

  },
 
  primaryButtonLabel: {
    color: "#25292e",
    fontSize: 14,
    fontFamily: "Avenir-Heavy",
  },

  secondaryButtonLabel: {
    color: "gray",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Avenir-Medium",

  },

  tertiaryButtonLabel:{
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Avenir-Medium",
  },

  buttonIcon: {
    paddingRight: 10,
  }, //don't delete this

});