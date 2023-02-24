import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { VStack } from '@react-native-material/core';
import {COLORS} from '../constants/theme'


export default function Button({ label, theme, onPress}) {
  if (theme === "primary") { 
    return (
      <View
      style={[styles.buttonContainer]}
      >
        <Pressable
          style={[styles.button, {  }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          
          <Text style={[styles.buttonLabel]}>{label}</Text>
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
  buttonContainer: {
    width: 275,
    height: 55,
    marginHorizontal: 20,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
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
    paddingTop: 30,
    color: "#25292e",
    fontSize: 18,
    fontFamily: "Avenir-Heavy",
  },

  secondaryButtonLabel: {
    color: "gray",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Avenir-Medium",

  },

  buttonIcon: {
    paddingRight: 10,
  }, //don't delete this

});