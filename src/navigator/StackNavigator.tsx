
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { LoginScreen } from '../screen/LoginScreen';
import { RegisterScreen } from '../screen/RegisterScreen';
import { Producto } from '../screen/Productos';
const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerShown:false,
        cardStyle:{
            
        }
    }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Productos" component={Producto} />
  
  </Stack.Navigator>
  )
}