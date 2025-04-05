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
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>Carrito de Compras</Text>
                        <Icon name="cancel" size={20} color={PRIMARY_COLOR} onPress={setShowModalCar} />
                    </View>
                    <FlatList
                        data={cart}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.cartItem}>
                                <View style={styles.cartItemDetails}>
                                    <Image source={item.img} style={styles.imageModal} />
                                    <View style={styles.productInfo}>
                                        <Text style={styles.titleModal}>{item.nombre}</Text>
                                        <Text style={styles.textQuantity}>Precio: ${item.precio}</Text>
                                        <Text style={styles.textQuantity}>Cantidad: {item.cantidad}</Text>
                                    </View>
                                </View>

                                <TouchableOpacity
                                    onPress={() => removeFromCart(item.id)}
                                    style={styles.removeButton}
                                >
                                    <Icon name="cancel" size={20} color="red" />
                                </TouchableOpacity>
                            </View>
                        )}
                    />

                    <View style={styles.totalContainer}>
                        <Text style={styles.textTotal}>Total: ${total.toFixed(2)}</Text>
                    </View>

                    <TouchableOpacity style={styles.buttonAddCar} onPress={setShowModalCar}>
                        <Text style={styles.buttonTextAddCar}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
