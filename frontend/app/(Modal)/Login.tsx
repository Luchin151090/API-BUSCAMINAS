import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí deberías implementar la lógica de autenticación
    // Por ejemplo, verificar las credenciales en una base de datos o servidor.
    if (username === 'usuario' && password === 'contraseña') {
      alert('Inicio de sesión exitoso');
    } else {
      alert('Credenciales incorrectas');
    }
  };
  

  return (
    <View style={styles.container}>
        <Ionicons name="person-outline" size={100} color={'#007BFF'} />
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
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
