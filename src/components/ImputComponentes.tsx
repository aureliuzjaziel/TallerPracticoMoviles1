import React from 'react'
import { KeyboardTypeOptions, TextInput } from 'react-native'
import { styles } from '../theme/EstilosLogin';

interface Props {
  contrasena: string;
  teclado: KeyboardTypeOptions;
  handleChangeValue: (name: string, value: string) => void;
  name: string;
  isPassword?: boolean; //propiedad opcional // y colocar un valor opcional por defecto: false
}
export const ImputComponent = ({contrasena, teclado, handleChangeValue, name, isPassword=false }: Props,) => {
  return (
    
    <TextInput
    placeholder={contrasena}
      keyboardType={teclado}
      onChangeText={(value) => handleChangeValue(name, value)}
      secureTextEntry={isPassword}
    style={styles.datos}
   
    />
    
        
    
    
  )
}
