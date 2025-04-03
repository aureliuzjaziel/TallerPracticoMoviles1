import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { styles } from '../theme/EstiloProducto';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const Producto = () => {
    const products = [
        { id: '1', nombre: 'BRAZIL', precio: '$800', img: require('../img/brazil.png') },
        { id: '2', nombre: 'ECUADOR', precio: '$200', img: require('../img/ecuador.png') },
        { id: '3', nombre: 'JAPON', precio: '$2500', img: require('../img/japon.png') },
        { id: '4', nombre: 'PARIS', precio: '$1200', img: require('../img/pais.png') },
        { id: '5', nombre: 'PERÚ', precio: '$350', img: require('../img/peru.png') },
    ];

    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../img/fondo13.png')} style={styles.background}> 
            <ScrollView>
            
            <FlatList 
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Image source={item.img} style={styles.img} />
                        <Text style={styles.nombres}>{item.nombre}</Text>
                        <Text style={styles.precio}>{item.precio}</Text>
                        <TouchableOpacity>
                            <Text style={styles.registrar}>Viaja Ahora</Text>
                        </TouchableOpacity>
                    </View>
                )}
                scrollEnabled={false} 
            />
            <TouchableOpacity
           onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                            <Text style={styles.volver}>Home</Text>    
            </TouchableOpacity>
        </ScrollView>

        </ImageBackground>
        
    );
};