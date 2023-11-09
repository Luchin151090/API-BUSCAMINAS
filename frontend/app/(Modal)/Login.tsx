import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {
  const [nickname, setNickname] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  const handleLogin = () => {
    // Realizar una solicitud POST al servidor para autenticar al usuario
    fetch('http://127.0.0.1:8003/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname, contrasenia }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.authenticated) {
          alert('Inicio de sesión exitoso');
        } else {
          alert('Credenciales incorrectas');
        }
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
      });
  };
  

  return (
    <View style={styles.container}>
        <Ionicons name="person-outline" size={100} color={'#007BFF'} />
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={nickname}
        onChangeText={(text) => setNickname(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
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
});

export default Login;
