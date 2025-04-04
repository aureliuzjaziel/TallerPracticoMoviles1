import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../../theme/EstilosApp';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../theme/commons/constains';
import { Product } from '../Productos';

interface Props {
    isVisible: boolean;
    product: Product | null;
    setShowModalCar: () => void;
}

export const ModalCar = ({ isVisible, product, setShowModalCar }: Props) => {
    if (!product) return null;

    return (
        <Modal visible={isVisible} animationType="slide" transparent={true}>
            <View style={styles.containerModal}>
                <View style={styles.contentModal}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>{product.nombre}</Text>
                        <Icon name="cancel" size={20} color={PRIMARY_COLOR} onPress={setShowModalCar} />
                    </View>
                    <Image source={product.img} style={styles.imageModal} />
                    <Text style={styles.textQuantity}>Días de hospedaje: 3</Text>
                    <Text style={styles.textQuantity}>Precio Adultos: ${product.precio}</Text>
                    <Text style={styles.textQuantity}>Precio Niños: ${(product.precio * 0.5).toFixed(2)}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <Icon name="location-on" size={20} color={PRIMARY_COLOR} />
                        <Text style={styles.textQuantity}>Dirección: Calle Principal, Ciudad</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonAddCar} onPress={setShowModalCar}>
                        <Text style={styles.buttonTextAddCar}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};