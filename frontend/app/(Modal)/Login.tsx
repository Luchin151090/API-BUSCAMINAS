import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native'; // Agrega Alert
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import axios from 'axios';

const Login = () => {
  const [nickname, setNickname] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:8003/login', {
        nickname,
        contrasenia,
      });
      
      // Actualiza el estado del mensaje
      setMessage(response.data.message);

      // Muestra el mensaje usando Alert
      //Alert.alert('Mensaje', response.data.message);

      setTimeout(() => {
        setMessage('');
      }, 2000);
      
      console.log(response.data);
    } catch (err) {
      console.error(err);
      // Manejo de errores si es necesario
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="person-outline" size={100} color={'#007BFF'} />
      <TextInput
        style={styles.input}
        placeholder="nickname"
        value={nickname}
        onChangeText={(text) => setNickname(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="contrasenia"
        secureTextEntry
        value={contrasenia}
        onChangeText={(text) => setContrasenia(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <Link href={'/(Modal)/Register'} asChild>
        <TouchableOpacity>
          <Text style={styles.registerText}>¿No tienes una cuenta? Regístrate</Text>
        </TouchableOpacity>
      </Link>

      {/* Muestra el mensaje en la vista */}
      {message !== '' && (
        <Text style={styles.message}>{message}</Text>
      )}
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
  registerText: {
    color: '#007BFF',
    fontSize: 16,
  },
  message: {
    marginTop: 10,
    color: 'green', // Puedes personalizar el color del mensaje
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Login;
