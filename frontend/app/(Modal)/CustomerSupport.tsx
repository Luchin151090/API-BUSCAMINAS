import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const CustomerSupport = () => {
  const handleCall = () => {
    Linking.openURL('tel:961320273'); // Reemplaza con el número de teléfono de atención al cliente
  };

  const handleEmail = () => {
    Linking.openURL('mailto:ymirandav@ulasalle.edu.pe'); // Reemplaza con la dirección de correo electrónico de atención al cliente
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atención al Cliente</Text>
      <TouchableOpacity style={styles.button} onPress={handleCall}>
        <Text style={styles.buttonText}>Llamar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleEmail}>
        <Text style={styles.buttonText}>Enviar Correo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CustomerSupport;
