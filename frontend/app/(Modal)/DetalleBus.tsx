import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '@/constants/Colors';

const DetalleBus = () => {
    return (
        <View style={styles.container}>
            <View style={styles.table}>
                <View style={styles.row}>
                    <Text style={styles.column}>Horario</Text>
                    <Text style={styles.column}>08:00 AM a 09:00 PM</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.column}>Inicio</Text>
                    <Text style={styles.column}>Colegio Santa Maria</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.column}>Fin</Text>
                    <Text style={styles.column}>Qhapac Restaurante</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.column}>Precio</Text>
                    <Text style={styles.column}>S/ 1.00</Text>
                </View>
            </View>

            <Image style={styles.mapa} source={require('@/assets/images/mapa.png')} />    
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0-3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EFEFEF',
        padding: 10,
        borderRadius: 10,
    },
    table: {
        borderWidth: 1, // Agregamos un borde a la tabla
        borderColor: 'black', // Color del borde
        marginBottom: 10    , // Espaciado inferior
        width: '100%', // Ancho completo
        padding: 5, // Espaciado interno de la tabla
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    column: {
        flex: 1,
        fontSize: 16,
        marginRight: 5,
        textAlign: 'center',
        borderBottomWidth: 1, // Línea inferior de cada celda
        borderColor: 'black', // Color de la línea
    },
    mapa: {
        width: 370,
        height: 300,
        marginTop: 10,
    },
});


export default DetalleBus;
