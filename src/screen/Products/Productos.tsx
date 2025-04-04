import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { styles } from '../../theme/EstiloProducto';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { PRIMARY_COLOR } from '../../theme/commons/constains';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CarProducts } from './components/CarProducts';
import { ButonComponent } from '../../components/ButonComponent';


//interface para los objetos Productos
export interface Product {
    id: number;
    nombre: string;
    precio: number;
    img: any;
}




export const Producto = () => {
    const products = [
        { id: 1, nombre: 'BRAZIL', precio: 800, img: require('../../img/brazil.png') },
        { id: 2, nombre: 'ECUADOR', precio: 200, img: require('../../img/ecuador.png') },
        { id: 3, nombre: 'JAPON', precio: 2500, img: require('../../img/japon.png') },
        { id: 4, nombre: 'PARIS', precio: 1200, img: require('../../img/pais.png') },
        { id: 5, nombre: 'PERÚ', precio: 350, img: require('../../img/peru.png') },
    ];



    const navigation = useNavigation();
    const handleGoHome= () => {
        navigation.dispatch(CommonActions.navigate({ name: 'HomeScreen' }));
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title="Productos" />
            <BodyComponent>
                <FlatList
                    data={products}
                    renderItem={({ item }) => <CarProducts product={item} />}
                    keyExtractor={item => item.id.toString()}
                />
                <ButonComponent title='Regresar al Inicio' handleLogin={handleGoHome}/>

            </BodyComponent>
        </View>











    );
};