import React, { useState } from 'react'
import { Image, Modal, Text, View } from 'react-native'
import { Product } from '../Productos'
import { styles } from '../../../theme/EstilosApp';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalProducts } from './ModalProducts';

interface Props {
    product: Product;
}

export const CarProducts = ({ product }: Props) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    return (
        <View>
            <View style={styles.containerCard}>
                <Image source={product.img}
                    style={styles.imgProduct} />
                <View>
                    <Text style={styles.titleProduct}>{product.nombre}</Text>
                    <Text>{product.precio}</Text>
                </View>
                <View>
                    <Icon name='add-circle'
                        size={20} 
                        onPress={() => setShowModal(!showModal)}/>
                </View>
            </View>
            <ModalProducts
            isVisible={showModal}
            setShowModal={() => setShowModal(!showModal)}
            product={product}/>
        </View>

    )
}

