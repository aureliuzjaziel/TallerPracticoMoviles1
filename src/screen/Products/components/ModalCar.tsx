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
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>Carrito de Compras</Text>
                        <Icon name="cancel" size={20} color={PRIMARY_COLOR} onPress={setShowModalCar} />
                    </View>
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
                        <Text style={styles.buttonTextAddCar}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};