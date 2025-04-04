import { CommonActions, useNavigation, NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import { Alert, Button, Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ImputComponent } from '../components/ImputComponentes';
import { ButonComponent } from '../components/ButonComponent';
import { User } from '../navigator/StackNavigator';
import { styles } from '../theme/EstilosApp';
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from '../theme/commons/constains';
import { setStatusBarHidden } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BodyComponent } from '../components/BodyComponent';
import { TitleComponent } from '../components/TitleComponent';

interface formLogin {
    email: string;
    password: string;
}

//interface props del stack navigator
interface Props {
    users: User[];
}


export const LoginScreen = ({ users }: Props) => {
    //hook usestate para manejar el estado del formulario
    const [formLogin, setFormLogin] = useState<formLogin>({
        email: '',
        password: ''
    });

    //hook usestate para manejar el estado del password
    const [hidenPassword, setHidenPassword] = useState<boolean>(true);

    //hook navigation para navegar entre pantallas
    const navigation = useNavigation();



    //funcion para el cambio de valores del objeto del formulario
    const handleChangeValue = (name: string, value: string): void => {
        //console.log(name,"",value);
        //actualizamos el estado del formulario
        setFormLogin({ ...formLogin, [name]: value }); //name: emai o password 
        // value : valor del input
    }
    //funcion para validad si existe el usuario
    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.email === formLogin.email && user.password === formLogin.password);
        return existUser;
    }

    //funcion para iniciar sesion
    const handleLoginForm = () => {
        //validamos que los campos no esten vacios
        if (formLogin.email === '' || formLogin.password === '') {
            //mensaje de alerta
            alert('Todos los campos son obligatorios');
            return;
            //el return termina la ejecucion de la funcion
        }
        //validamos si existe el usuario
        if (!verifyUser()) {
            Alert.alert('Error', 'Usuario o contraseña incorrectos');
            return;
        }
        //inicio de sesion correcto
        navigation.dispatch(CommonActions.navigate('Productos'));
        //console.log(formLogin);

    }

    return (



        <View>
            
            <StatusBar/>
            
            <TitleComponent title='Inicio de sesión' />
            <BodyComponent >
            <Image source={require('../img/logoTravel.png')} style={styles.logoSumer2} ></Image>
                <View>
                    <Text>Email</Text>
                    <ImputComponent contrasena='correo'
                        handleChangeValue={handleChangeValue}
                        name='email' teclado='email-address' />
                    <Text>Contraseña</Text>
                    <ImputComponent contrasena='contrasena'
                        handleChangeValue={handleChangeValue}
                        name='password'
                        teclado='default'
                        isPassword={hidenPassword} />
                    <Icon name={(hidenPassword) ? 'visibility' : 'visibility-off'}
                        size={20}
                        color={'black'}
                        style={styles.icon}
                        onPress={() => setHidenPassword(!hidenPassword)} />

                </View>



                <TouchableOpacity>
                    <Text style={styles.contraseña}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
                <ButonComponent title='Ingresar' handleLogin={handleLoginForm} />

                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                    <Text style={styles.registro}>¿No tienes cuenta?. Regístrate</Text>
                </TouchableOpacity>
                <Icon name='home'
                    size={30}
                    color={'black'}
                    style={styles.iconHome}
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Home' }))}
                />

            </BodyComponent>



        </View>



    );
};

