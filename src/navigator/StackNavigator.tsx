
import { createStackNavigator } from '@react-navigation/stack'
import React, { useState } from 'react'
import { LoginScreen } from '../screen/LoginScreen';
import { RegisterScreen } from '../screen/RegisterScreen';
import { Producto } from '../screen/Products/Productos';
import { HomeScreen } from '../screen/HomeScreen';


//interface para data de usuarios
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
const Stack = createStackNavigator();

export const StackNavigator = () => {
  //arreglo usuarios (data base)
  const users: User[] = [
    { id: 1, name: 'Juan', email: 'xavier@gmail.com', password: '123456' },
    { id: 2, name: 'Pedro', email: 'pedro@gmail.com', password: '123456' },
    { id: 3, name: 'a', email: 'a', password: '1' },
  ];

  //hook useSate para manejar el estado de los usuarios
  const [usersManager, setUsersManage] = useState<User[]>(users);
  //funcion para afrgar un usuario en el usermanager
  const addUser = (user: User) => {
    setUsersManage([...usersManager, user]);
  }


  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {

        }
      }}>
      {/* <Stack.Screen name="Home" component={HomeScreen}/> */}
      {/* <Stack.Screen name="Login" children={() => <LoginScreen users={usersManager} />} /> */}
      {/* <Stack.Screen name="Register" children={() => <RegisterScreen users={usersManager} addUser={addUser} />} /> */}
      <Stack.Screen name="Productos" component={Producto} />

    </Stack.Navigator>
  )
}