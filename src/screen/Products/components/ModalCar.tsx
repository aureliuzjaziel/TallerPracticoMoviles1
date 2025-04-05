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
    removeFromCart: (productId: number) => void; // Función para eliminar productos del carrito
}

export const ModalCar = ({ isVisible, cart, setShowModalCar, removeFromCart }: Props) => {
    // Calcular el total
    const total = cart.reduce((acc, item) => acc + item.precio * (item.cantidad || 1), 0);

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
                                <Text style={styles.titleModal}>{item.nombre}</Text>
                                <Text style={styles.textQuantity}>Precio: ${item.precio}</Text>
                            </View>
                        )}
                    />
                    <TouchableOpacity style={styles.buttonAddCar} onPress={setShowModalCar}>
                        <Text style={styles.buttonTextAddCar}>Contactar con un Asessor</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
