import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Trip {
  id: number;
  date: string;
  origin: string;
  destination: string;
  fare: string;
}

const TripHistory = () => {
  const trips: Trip[] = [
    {
      id: 1,
      date: '2023-10-10',
      origin: 'Calle Principal',
      destination: 'Plaza Central',
      fare: 'S/ 1.00',
    },
    {
      id: 2,
      date: '2023-10-09',
      origin: 'Universidad La Salle',
      destination: 'Parque de la Ciudad',
      fare: 'S/ 2.00',
    },
    {
      id: 3,
      date: '2023-10-08',
      origin: 'Estación de Tren',
      destination: 'Centro Comercial',
      fare: 'S/ 1.00',
    },
  ];

  const renderItem = ({ item }: { item: Trip }) => (
    <View style={styles.tripItem}>
      <Text>Fecha: {item.date}</Text>
      <Text>Origen: {item.origin}</Text>
      <Text>Destino: {item.destination}</Text>
      <Text>Tarifa: {item.fare}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tripItem: {
    backgroundColor: '#EEE9F0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});

export default TripHistory;
