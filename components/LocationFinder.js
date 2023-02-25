import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import * as Location from 'expo-location';

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
        'Location Service not enabled',
        'Please enable your location services to continue',
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
        'Allow the app to use location service.',
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

      <Text style={styles.text}>{displayCurrentAddress}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#070707',
    alignItems: 'center',
    width: 300,
    marginLeft: 50,
    marginTop: 10,
    padding: 10

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
    fontWeight: '400',
    color: '#fff',
  },
});

export default Welcome;