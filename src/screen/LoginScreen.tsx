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
