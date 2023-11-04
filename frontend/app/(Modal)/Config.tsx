import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState('mediano');
  const [notifications, setNotifications] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeFontSize = (size: React.SetStateAction<string>) => {
    setFontSize(size);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <Text>Modo Nocturno</Text>
        <Switch
          value={darkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
        />
      </View>
      <View style={styles.option}>
        <Text>Tamaño de Letra</Text>
        <TouchableOpacity onPress={() => changeFontSize('grande')}>
          <Text style={fontSize === 'grande' ? styles.selectedOption : styles.optionText}>Grande</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeFontSize('mediano')}>
          <Text style={fontSize === 'mediano' ? styles.selectedOption : styles.optionText}>Mediano</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeFontSize('pequeño')}>
          <Text style={fontSize === 'pequeño' ? styles.selectedOption : styles.optionText}>Pequeño</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.option}>
        <Text>Notificaciones</Text>
        <Switch
          value={notifications}
          onValueChange={toggleNotifications}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={notifications ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 16,
  },
  selectedOption: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});

export default Settings;
