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
    addToCart: (product: Product) => void; // Función para agregar al carrito
}

export const ModalProducts = ({ isVisible, setShowModal, product, addToCart }: Props) => {
    const { width } = useWindowDimensions();
    const [showModalCar, setShowModalCar] = useState<boolean>(false); // Estado para controlar ModalCar
    const [cart, setCart] = useState<Product[]>([]); // Estado para almacenar los productos en el carrito

    const handleAddCar = () => {
        // Agrega el producto al carrito
        addToCart(product); // Llama a la función para agregar al carrito
        setCart((prevCart) => [...prevCart, product]); // Actualiza el estado del carrito
        setShowModal(); // Cierra el ModalProducts
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

                       
                        <View style={styles.infoContainer}>
                            <Text style={styles.hotelName}>{product.nombre}</Text>
                            <View style={styles.row}>
                                <Icon name="location-on" size={20} color={PRIMARY_COLOR} />
                                <Text style={styles.textInfo}>{product.direccion}</Text>
                            </View>
                            <Text style={styles.textInfo}>Precio por adulto: ${product.precio.toFixed(2)}</Text>
                            <Text style={styles.textInfo}>Precio por niño: ${(product.precio * 0.5).toFixed(2)}</Text>
                        </View>

                        
                        <View>
                            <TouchableOpacity style={styles.buttonAddCar} onPress={handleAddCar}>
                                <Text style={styles.buttonTextAddCar}>Comprar Ahora</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            
            <ModalCar removeFromCart={() => {}} // Función para eliminar productos del carrito (puedes implementarla si es necesario)
                isVisible={showModalCar}
                cart={cart} // Pasamos el carrito completo
                setShowModalCar={() => setShowModalCar(false)}
            />
        </>
    );
};