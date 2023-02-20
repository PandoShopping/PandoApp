import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress}) {
  if (theme === "primary") { 
    return (
      <View
      style={[styles.buttonContainer,]}
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

  else if (theme === "bigAss") { 
    return (
      <View
      style={[styles.buttonContainer2]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        > 
        {/* random shit */}
                {/* random shit */}

             <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />

          <Text style={[styles.primaryButtonLabel]}>New image</Text>


          <Text style={[styles.secondaryButtonLabel]}>{label}</Text>

       

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
  buttonContainer2: {
    width: 360,
    height: 300,
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
    padding: 15,
  },
  primaryButtonLabel: {
    color: "#25292e",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Avenir-Medium",
    // fontWeight: "medium", 
  },
  secondaryButtonLabel: {
    padding: 15,
    color: "gray",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Avenir-Medium",

  }
});
