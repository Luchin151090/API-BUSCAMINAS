import { View,  Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, { useState,useEffect,forwardRef, useCallback, useMemo } from 'react';
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

export type Ref = BottomSheetModal;

const Buses = () => {
  const snapPoints = useMemo(() => ['38%'], []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [buses, setBuses] = useState([]); // Estado para almacenar los datos de los autobuses

  useEffect(() => {
    // Realiza una solicitud GET a la API para obtener los datos de los autobuses
    axios.get('http://127.0.0.1:8003/api/bus')
      .then((response) => {
        const data = response.data; // Obtiene los datos de la respuesta
        setBuses(data); // Actualiza el estado con los datos
      })
      .catch((error) => {
        console.log('Error al cargar los datos de la API: ', error);
      });
  }, []);

  return (
    <View style={styles.contentContainer}>
      {loading ? (
        <ActivityIndicator size="large" color={Colors.blue} />
      ) : error ? (
        <Text>Error al cargar los datos de la API</Text>
      ) : (
        buses.map((bus) => (
          <TouchableOpacity key={bus.id}>
            <View style={styles.item}>
              <Image style={styles.bike} source={{ uri: bus.imagen }} />
              <Text style={{ flex: 1, fontSize: 20 }}>{bus.nombre}</Text>
              <Ionicons name="information-circle-outline" size={30} color={Colors.blue} />
            </View>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: Colors.grey,
    borderRadius: 20
    
  },
  bike: {
    width: 100,
    height: 60,
  },
  
});

export default Buses;