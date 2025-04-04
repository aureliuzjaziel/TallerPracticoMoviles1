import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { ButonComponent } from '../components/ButonComponent';
import { styles } from '../theme/EstilosApp';

export const HomeScreen = () => {

    const navigation = useNavigation();

    const handleLogin = () => {
        
        navigation.dispatch(CommonActions.navigate({name:'Login'}));
    }

  return (
    <ImageBackground source={require('../img/fondo13.png')} style={styles.background}>
        <View style={styles.container}>
            
            <Image source={require('../img/logoTravel.png')} style={styles.logoSumer}/>
            <Text style={styles.textHome}>
                Bienvenido a la app de viajes
                
            </Text>
            <ButonComponent
            title='Bienvenido'
            handleLogin={handleLogin}
            />
        </View>
    </ImageBackground>
  )
}
