import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { User } from '../navigator/StackNavigator';
import { ImputComponent } from '../components/ImputComponentes';
import { ButonComponent } from '../components/ButonComponent';
import { styles } from '../theme/EstilosApp';

//interface para el objeto formulario
interface FormRegister {
  name: string;
  email: string;
  password: string;
}
interface Props {
  users: User[];
  addUser: (user: User) => void; // agregar nuevos usuarios

}

export const RegisterScreen = ({ users, addUser }: Props) => {

  const handleChangeValue = (name: string, value: string): void => {
    setFormRegister({ ...FormRegister, [name]: value });
  }

  //funcion para verificar que el usuario no exista
  const verifyUser = (): User | undefined => {
    const existUser = users.find(user => user.email === FormRegister.email);
    return existUser;

  }
  //metodo para limpiar la pantalla
  const clearFiles = () => {
    setFormRegister({
      name: '',
      email: '',
      password: '',
    })
  }

  // hook para navegar entre pantallas
  //const navigation = useNavigation();

  //funcion para registrar usuario
  const handleRegister = () => {
    //console.log(FormRegister);
    if (FormRegister.name === '' || FormRegister.email === '' || FormRegister.password === '') {
      //mensaje de alerta
      alert('Todos los campos son obligatorios');
      return;
    }
    //validar si el usuario ya existe
    if (verifyUser()) {
      clearFiles();//limpiar campos
      //mensaje de alerta
      alert('El usuario ya existe');
      return;

    }
    //agregar nuevo usuario
    //crear objeto
    const newUser: User = {
      id: users.length + 1,
      name: FormRegister.name,
      email: FormRegister.email,
      password: FormRegister.password

    }
    //console.log(FormRegister);
    addUser(newUser);
    navigation.goBack();//regresar a la pantalla anterior


  }
  //hook usestate para manejar el estado del formulario
  const [FormRegister, setFormRegister] = useState<FormRegister>({
    name: '',
    email: '',
    password: ''
  });
  const navigation = useNavigation();
  return (
    

      <View style={styles.container}>
        <Image source={require('../img/logoSummer.png')} style={styles.logoSumer} />

        <Text style={styles.registros}>Crea una cuenta nueva</Text>
        <View>
          <Text>Nombre</Text>
          <ImputComponent
            contrasena='Nombre'
            handleChangeValue={handleChangeValue}
            name='name'
            teclado='default'
          />
          <Text>Apellido</Text>
          <ImputComponent
            contrasena='Apellido'
            handleChangeValue={handleChangeValue}
            name='name'
            teclado='default'
          />
          <Text>Correo</Text>
          <ImputComponent contrasena='Correo'
            handleChangeValue={handleChangeValue}
            name='email'
            teclado='email-address' />
            <Text>Contraseña</Text>
          <ImputComponent contrasena='Contraseña'
            handleChangeValue={handleChangeValue}
            name='password'
            teclado='default'
          />
          <Text>Confirmar contraseña</Text>
          <ImputComponent contrasena='confirmar contraseña'
          handleChangeValue={handleChangeValue}
          name='confirmar'  
          teclado='default'
          />
        </View>
        <ButonComponent title='Registrar' handleLogin={handleRegister}/>
        
        <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
          <Text style={styles.ingreso}>¿Ya tienes una cuenta? Inicia sesión</Text>
        </TouchableOpacity>
      </View> 

    
  );
};


