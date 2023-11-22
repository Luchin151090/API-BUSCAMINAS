import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';  // Importa Marker de react-native-maps
import Colors from '@/constants/Colors';
import { useNavigation } from 'expo-router';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { Ionicons } from '@expo/vector-icons';

const LocationSearch = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState({
    latitude: -16.423399904631825,
    longitude: -71.55657756931967,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleLocationSelect = (data: GooglePlaceData, details: GooglePlaceDetail | null) => {
    if (details && details.geometry && details.geometry.location) {
      const { lat, lng } = details.geometry.location;
      setLocation({
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  };
  

  return (
    <View style={{ flex: 1 }}>
    <GooglePlacesAutocomplete
      placeholder='Buscar o mover el mapa'
      styles={{
        container: {
          flex: 0,
        },
        textInput: {
          fontSize: 18,
        },
      }}
      onPress={handleLocationSelect}
      fetchDetails={true}
      enablePoweredByContainer={false}
      minLength={2}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
        language: 'es',
      }}
      nearbyPlacesAPI='GooglePlacesSearch'
      debounce={400}
    />
    <MapView showsUserLocation={true} style={styles.map} region={location}>
      <Marker coordinate={location} />
    </MapView>
    <View style={styles.absoluteBox}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  absoluteBox: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: Colors.blue,
    padding: 16,
    margin: 16,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  boxIcon: {
    position: 'absolute',
    left: 15,
    top: 18,
    zIndex: 1,
  },
});

export default LocationSearch;
