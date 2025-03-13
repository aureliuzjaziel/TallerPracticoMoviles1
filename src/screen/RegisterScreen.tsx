import React from 'react'
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const RegisterScreen = () => {
    return (
        <ImageBackground source={require('../screen/img/fondo13.jpg')} style={styles.background}>

            <View style={styles.container}>
                <Image source={require('../screen/img/logoSummer.png')} style={styles.logoSumer} />

                <Text style={styles.registros}>Crea una cuenta nueva</Text>
                <Text>Nombre</Text>
                <TextInput style={styles.datos} />
                <Text>Apellido</Text>
                <TextInput style={styles.datos} />
                <Text>Email</Text>
                <TextInput style={styles.datos} keyboardType="email-address" />
                <Text>Contraseña</Text>
                <TextInput style={styles.datos} secureTextEntry={true} />
                <Text>Confirmar Contraseña</Text>
                <TextInput style={styles.datos} secureTextEntry={true} />
                <TouchableOpacity onPress={() => ('Registrar')}>
                    <Text style={styles.registrar}>REGISTRARSE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>    ('Ingresar')}>
                    <Text style={styles.ingreso}>¿Ya tienes una cuenta? Inicia sesión</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        opacity: 0.9,
    },
    contenedor1: {
        flex: 1,
        backgroundColor: '#F7EEDD',
    },
    container: {
        margin: 50,
        height: 100,
        width: 300,
        borderRadius: 30,
        flex: 1,
        backgroundColor: '#ACE2E1',
        justifyContent: 'center',
        padding: 30,
    },
    logoSumer: {
        width: 150,
        height: 150,
        position: 'relative',
        top: -30,
        left: 50,
    },
    registrar: {
        padding: 10,
        backgroundColor: '#41C9E2',
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'center',
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'center',
    },
    registros: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    datos: {
        borderRadius: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    },
    ingreso: {
        color: 'blue',
        marginTop: 20,
        textAlign: 'center',
    },
});
