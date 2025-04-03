import { CommonActions, useNavigation, NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import { Alert, Button, Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/EstilosLogin';
import { ImputComponent } from '../components/ImputComponentes';
import { ButonComponent } from '../components/ButonComponent';
import { User } from '../navigator/StackNavigator';

interface formLogin{
    email: string;
    password: string;
}

//interface props del stack navigator
interface Props{
    users: User[];
}


export const LoginScreen = ({users}: Props) => {
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
    const verifyUser = (): User | undefined=> {
        const existUser = users.find(user => user.email === formLogin.email && user.password === formLogin.password);
        return existUser;
    }

    //funcion para iniciar sesion
    const handleLoginForm = () => {
        //validamos que los campos no esten vacios
        if(formLogin.email === '' || formLogin.password === ''){
            //mensaje de alerta
            alert('Todos los campos son obligatorios');
            return;
            //el return termina la ejecucion de la funcion
        }
        //validamos si existe el usuario
        if(!verifyUser()){
            Alert.alert('Error', 'Usuario o contraseña incorrectos');
            return;
        }
        //inicio de sesion correcto
        navigation.dispatch(CommonActions.navigate('Productos'));
        //console.log(formLogin);

    }
    

    
    
    //const naigation = useNavigation();
    return (

         <ImageBackground source={require('../img/fondo13.png')} style={styles.background}>
            <View style={styles.container}>
                {/* <StatusBar  
                backgroundColor={'blue'}
                barStyle={'light-content'}
                translucent={true} /> */}
                
                <Image source={require('../img/logoTravel.png')} style={styles.logoSumer} ></Image>


                <Text style={styles.inicioS}>Inicio de sesión</Text>
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
                <TouchableOpacity>
                    <Text style={styles.contraseña}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
                <ButonComponent title='Ingresar' handleLogin={handleLoginForm} />
                
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                    <Text style={styles.registro}>¿No tienes cuenta?. Regístrate</Text>
                </TouchableOpacity>
            </View>

         </ImageBackground>

    );
};

