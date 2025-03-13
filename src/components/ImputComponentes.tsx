import React from 'react'
import { KeyboardTypeOptions, TextInput } from 'react-native'
import { styles } from '../theme/EstilosLogin';

interface Props{
    contraseña: string;
    teclado: KeyboardTypeOptions;
}
export const ImputComponent = ({contraseña,teclado}: Props,) => {
  return (
    
    <TextInput
    placeholder={contraseña}
    keyboardType={teclado}
    style={styles.datos}
   
    />
    
        
    
    
  )
}