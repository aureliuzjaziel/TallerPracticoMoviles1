import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../../../theme/EstilosApp';
import { Product } from '../Productos';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../theme/commons/constains';
import { ModalCar } from './ModalCar';

interface Props {
    isVisible: boolean;
    setShowModal: () => void;
    product: Product;
}

export const ModalProducts = ({ isVisible, setShowModal, product }: Props) => {
    const { width } = useWindowDimensions();
    const [showModalCar, setShowModalCar] = useState<boolean>(false); // Estado para controlar ModalCar

    const handleAddCar = () => {
        setShowModal(); // Cierra el ModalProducts
        setShowModalCar(true); // Abre el ModalCar
    };

    return (
        <>
            <Modal visible={isVisible} animationType="fade" transparent={true}>
                <View style={styles.containerModal}>
                    <View style={{ ...styles.contentModal, width: width * 0.8 }}>
                        <View style={styles.headerModal}>
                            <Text style={styles.titleModal}>
                                {product.nombre} - ${product.precio.toFixed(2)}
                            </Text>
                            <View style={styles.containerIcon}>
                                <Icon name="cancel" size={20} color={PRIMARY_COLOR} onPress={setShowModal} />
                            </View>
                        </View>
                        <View style={styles.containerImage}>
                            <Image source={product.img} style={styles.imageModal} />
                        </View>
                        <View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.textQuantity}>
                                    Total: ${(product.precio * 1).toFixed(2)}
                                </Text>
                            </View>
                            <TouchableOpacity style={styles.buttonAddCar} onPress={handleAddCar}>
                                <Text style={styles.buttonTextAddCar}>Comprar Ahora</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* ModalCar */}
            <ModalCar
                isVisible={showModalCar}
                product={product}
                setShowModalCar={() => setShowModalCar(false)}
            />
        </>
    );
};