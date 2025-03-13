import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/EstilosLogin';



export const LoginScreen = () => {
    const navigation= useNavigation();
    return (
        
        <ImageBackground source={require('../img/fondo13.png')} style={styles.background}>


            <View style={styles.container}>
                <Image source={require('../img/logoTravel.png')} style={styles.logoSumer} ></Image>


                <Text style={styles.inicioS}>Inicio de sesión</Text>
                <Text>Email</Text>
                
                <TextInput style={styles.datos} />
                <Text>Contraseña</Text>
                <TextInput style={styles.datos} />
                <TouchableOpacity>
                    <Text style={styles.contraseña}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'Productos'}))} >
                    <Text style={styles.ingresar}>INGRESAR</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'Register'}))}>
                    <Text style={styles.registro}>¿No tienes cuenta?. Regístrate</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
        
    );
};
<<<<<<< HEAD
=======

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
        //opacity: 1,
        

        flex: 1,
        backgroundColor: '#ACE2E1',
        justifyContent: 'center',
        padding: 30,

    },
    logoSumer: {
        width: 200,
        height: 200,
        position: 'relative',
        top: -20,
        left: 20,


    },
    ingresar: {
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
    inicioS: {
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
    contraseña: {
        color: 'blue',
        marginBottom: 20,
        textAlign: 'right',
    },
    registro: {
        color: 'blue',
        marginTop: 20,
        textAlign: 'center',
    },
});
>>>>>>> 88e07e43ff653161a2ac7ab2c608262bbfea7805
