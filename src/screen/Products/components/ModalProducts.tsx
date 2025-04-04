import React from 'react'
import { Image, Modal, Text, useWindowDimensions, View } from 'react-native'
import { styles } from '../../../theme/EstilosApp'
import { Product } from '../Productos';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../theme/commons/constains';

interface Props{
    isVisible: boolean;
    setShowModal: () => void;
    product: Product;

}



export const ModalProducts = ({isVisible, setShowModal, product }:Props) => {

    // hook para dimensio
const {width} = useWindowDimensions();
  return (
    <Modal visible={isVisible} animationType='fade' transparent={true}>

        <View style={styles.containerModal}>
            <View style={{...
                styles.contentModal,
                width: width * 0.80,}}>
            <Text>{product.nombre}</Text>
            </View>
            <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>
                            {product.nombre} - ${product.precio.toFixed(2)}
                        </Text>
                        <View style={styles.containerIcon}>
                            <Icon name='cancel'
                                size={20}
                                color={PRIMARY_COLOR}
                                onPress={setShowModal}
                            />
                        </View>
                    </View>
                    <View style={styles.containerImage}>
                        <Image source={product.img}
                            style={styles.imageModal} />
                    </View>
            
        </View>

    </Modal>
  )
}
