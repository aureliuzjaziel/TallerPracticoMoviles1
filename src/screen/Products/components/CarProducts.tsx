import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { Product } from '../Productos';
import { styles } from '../../../theme/EstilosApp';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalProducts } from './ModalProducts';

interface Props {
    product: Product;
    addToCart: (product: Product) => void;
}

export const CarProducts = ({ product, addToCart }: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <View style={styles.containerCard}>
            {/* Imagen del producto */}
            <Image source={product.img} style={styles.imgProduct} />

            {/* Información del producto */}
            <View style={styles.infoContainer}>
                <Text style={styles.titleProduct}>{product.nombre}</Text>
                <Text style={styles.textInfo}>Precio: ${product.precio.toFixed(2)}</Text>
                <Text style={styles.textInfo}>Días: {product.dias} días</Text>
                <View style={styles.row}>
                    <Icon name="star" size={16} color="#FFD700" />
                    <Text style={styles.textInfo}>{product.ranking.toFixed(1)}</Text>
                </View>
                <Text style={styles.textDescription}>{product.descripcion}</Text>
            </View>

            {/* Botón para abrir el modal */}
            <TouchableOpacity style={styles.addButton} onPress={() => setShowModal(!showModal)}>
                <Icon name="add-circle" size={24} color="#4CAF50" />
            </TouchableOpacity>

            {/* Modal para mostrar detalles del producto */}
            <ModalProducts
                isVisible={showModal}
                addToCart={addToCart}
                setShowModal={() => setShowModal(!showModal)}
                product={product}
            />
        </View>
    );
};

