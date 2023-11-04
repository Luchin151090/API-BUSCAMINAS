import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import MapView from 'react-native-maps';

const LocationSearch = () => {
    const [location, setLocation] = useState({
        latitude: -16.409047,
        longitude: -71.537451,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })    

    return (
    <View style={{ flex: 1 }}>
      <MapView style={styles.map} region={location} />
    </View>
    );
};
  
const styles = StyleSheet.create({
    map: {
      flex: 1,
    },
});

export default LocationSearch;