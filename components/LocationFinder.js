import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import * as Location from 'expo-location';
import {COLORS, FONTS} from '../constants/theme'
import Icon from "@expo/vector-icons/Ionicons";
import Button from './Button'
import { HStack } from '@react-native-material/core';

const Welcome = ({ navigation }) => {
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);

  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    'Getting location...'
  );

  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        'Location Services not enabled',
        'Enable location services in settings to continue',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permission not granted',
        'Please let Pando use location services!',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        // console.log(item)
        let address = ` ${item.street}, ${item.postalCode}, ${item.city}`;
//other possible values: ${item.name},
        setDisplayCurrentAddress(address);
        
      }
    }
  };

  return (
    <View style={styles.container}>
           <HStack spacing ={7} style = {{alignItems: "center", }}>
           <Icon
  name='ios-location-sharp'
  size={20}
  color={COLORS.buttonPrimaryMedium}
/>
      <Text style={styles.text}>{displayCurrentAddress}</Text>
       </HStack>

   
      {/* <Button theme="notPressable" label="{displayCurrentAddress}" icon = { <Icon
            name={"log-out"}
            size={18}
            color="#25292e"
          //  style={styles.buttonIcon}
          />}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.buttonPrimaryLight,
    alignItems: 'center',
    width: 300,
    marginLeft: 50,
    marginTop: 50,
    padding: 10,
    borderRadius: 30,
  },
  contentContainer: {
    alignItems: 'center',
    marginBottom: 0,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 0,
  },
  text: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontFamily: FONTS.medium
  },
});

export default Welcome;