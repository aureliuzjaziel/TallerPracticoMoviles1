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
    removeFromCart: (product: number) => void; // Función para eliminar productos del carrito
}

export const ModalCar = ({ isVisible, cart, setShowModalCar, removeFromCart }: Props) => {
    // Calcular el total
    const total = cart.reduce((acc, item) => acc + item.precio * (item.cantidad || 1), 0);

    return (
        <Modal visible={isVisible} animationType="slide" transparent={true}>
            <View style={styles.containerModal}>
                <View style={styles.contentModal}>
                    
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>Tus Favoritos</Text>
                        <Icon name="cancel" size={24} color={PRIMARY_COLOR} onPress={setShowModalCar} />
                    </View>


                    <FlatList
                        data={cart}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.cartItem}>
                                <Image source={item.img} style={styles.imageModal} />


                                <View style={styles.productInfo}>
                                    <Text style={styles.titleModal}>{item.nombre}</Text>
                                    <Text style={styles.textQuantity}>Precio: ${item.precio}</Text>
                                    <Text style={styles.textQuantity}>Cantidad: {item.cantidad}</Text>
                                </View>

                                <Icon
                                    name="delete"
                                    color="red"
                                    size={40}
                                    onPress={() => removeFromCart(item.id)} // Llama a la función para eliminar el producto
                                    style={styles.removeButtonIcon}
                                />
                            </View>
                        )}
                    />


                    <View style={styles.totalContainer}>
                        <Text style={styles.textTotal}>Total: ${total.toFixed(2)}</Text>
                    </View>


                    <TouchableOpacity style={styles.buttonAddCar} onPress={setShowModalCar}>
                        <Text style={styles.buttonTextAddCar}>Contactar con un Asesor</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
