import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { User } from '../navigator/StackNavigator';
import { ImputComponent } from '../components/ImputComponentes';
import { ButonComponent } from '../components/ButonComponent';
import { styles } from '../theme/EstilosApp';
import { BodyComponent } from '../components/BodyComponent';
import { TitleComponent } from '../components/TitleComponent';
import { QUATERNARY_COLOR } from '../theme/commons/constains';

// Interface para el objeto formulario
interface FormRegister {
  name: string;
  email: string;
  password: string;
}
interface Props {
  users: User[];
  addUser: (user: User) => void; // Agregar nuevos usuarios
}

export const RegisterScreen = ({ users, addUser }: Props) => {
  const [FormRegister, setFormRegister] = useState<FormRegister>({
    name: '',
    email: '',
    password: '',
  });

  const navigation = useNavigation();

  const handleChangeValue = (name: string, value: string): void => {
    setFormRegister({ ...FormRegister, [name]: value });
  };

  const verifyUser = (): User | undefined => {
    const existUser = users.find((user) => user.email === FormRegister.email);
    return existUser;
  };

  const clearFiles = () => {
    setFormRegister({
      name: '',
      email: '',
      password: '',
    });
  };

  const handleRegister = () => {
    if (FormRegister.name === '' || FormRegister.email === '' || FormRegister.password === '') {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (verifyUser()) {
      clearFiles();
      alert('El usuario ya existe');
      return;
    }

    const newUser: User = {
      id: users.length + 1,
      name: FormRegister.name,
      email: FormRegister.email,
      password: FormRegister.password,
    };

    addUser(newUser);
    navigation.goBack();
  };

  return (
    
    <View >
      <StatusBar backgroundColor={QUATERNARY_COLOR}/>
      <TitleComponent title="Registro" />
      
        <BodyComponent>
          <Image source={require('../img/logoSummer.png')} style={styles.logoSumer2} />
          <Text style={styles.registros}>Crea una cuenta nueva</Text>
          <View>
            
            <ImputComponent
              contrasena="Nombre"
              handleChangeValue={handleChangeValue}
              name="name"
              teclado="default"
            />
            
            <ImputComponent
              contrasena="Apellido"
              handleChangeValue={handleChangeValue}
              name="apellido"
              teclado="default"
            />
            
            <ImputComponent
              contrasena="Correo"
              handleChangeValue={handleChangeValue}
              name="email"
              teclado="email-address"
            />
            
            <ImputComponent
              contrasena="Direccion"
              handleChangeValue={handleChangeValue}
              name="direccion"
              teclado="default"
            />
            
            <ImputComponent
              contrasena="Contraseña"
              handleChangeValue={handleChangeValue}
              name="password"
              teclado="default"
            />
            <ButonComponent title="Registrar" handleLogin={handleRegister} />
          </View>
          <TouchableOpacity
            onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}
          >
            <Text style={styles.ingreso}>¿Ya tienes una cuenta? Inicia sesión</Text>
          </TouchableOpacity>
        </BodyComponent>
      
    </View>
  );
};    