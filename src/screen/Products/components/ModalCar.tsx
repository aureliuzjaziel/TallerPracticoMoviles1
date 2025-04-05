import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../../../theme/EstilosApp';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../theme/commons/constains';
import { Product } from '../Productos';

interface Props {
    isVisible: boolean;
    cart: Product[]; // Lista de productos en el carrito
    setShowModalCar: () => void;
}

export const ModalCar = ({ isVisible, cart, setShowModalCar }: Props) => {
    return (
        <Modal visible={isVisible} animationType="slide" transparent={true}>
            <View style={styles.containerModal}>
                <View style={styles.contentModal}>
                    {/* Encabezado del modal */}
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>Tus Favoritos</Text>
                        <Icon name="cancel" size={24} color={PRIMARY_COLOR} onPress={setShowModalCar} />
                    </View>

                    {/* Lista de productos en el carrito */}
                    <FlatList
                        data={cart}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.cartItem}>
                                <Image source={item.img} style={styles.imageModal} />
                                <View style={styles.cartItemInfo}>
                                    <Text style={styles.titleProduct}>{item.nombre}</Text>
                                    <Text style={styles.textInfo}>Precio: ${item.precio.toFixed(2)}</Text>
                                    <Text style={styles.textInfo}>Cantidad: {item.cantidad || 1}</Text>
                                </View>
                            </View>
                        )}
                    />

                    {/* Botón para cerrar el modal */}
                    <TouchableOpacity style={styles.buttonAddCar} onPress={setShowModalCar}>
                        <Text style={styles.buttonTextAddCar}>Contactar con un Asessor</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};