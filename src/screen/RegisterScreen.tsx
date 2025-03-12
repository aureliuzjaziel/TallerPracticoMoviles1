import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/Estiloregister';

export const RegisterScreen = () => {
    const navigation= useNavigation();
    return (
        <ImageBackground source={require('../img/fondo13.png')} style={styles.background}>

            <View style={styles.container}>
                <Image source={require('../img/logoSummer.png')} style={styles.logoSumer} />

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
                <TouchableOpacity  onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'Login'}))}>
                    <Text style={styles.ingreso}>¿Ya tienes una cuenta? Inicia sesión</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
};


