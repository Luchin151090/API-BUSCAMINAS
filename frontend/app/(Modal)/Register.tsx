import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Register = () => {
  const [nombres, setFullName] = useState('');
  const [correo, setEmail] = useState('');
  const [nickname, setUsername] = useState('');
  const [contrasenia, setPassword] = useState('');
  const [dni, setDNI] = useState('');
 

  const handleRegister = async () => {
    try {
      const res = await fetch('http://10.0.2.2:8003/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombres: nombres,
          correo: correo,
          nickname: nickname,
          contrasenia: contrasenia,
          dni : dni,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        alert("registro exitoso");
      } else {
        const errorData = await res.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Error al registrar. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="duplicate-outline" size={100} color={'#007BFF'} />
      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={nombres}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        keyboardType="email-address"
        value={correo}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={nickname}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={contrasenia}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="DNI"
        secureTextEntry
        value={dni}
        onChangeText={(text) => setDNI(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Register;