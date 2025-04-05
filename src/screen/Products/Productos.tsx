import React, { useState } from 'react';
import { FlatList, View, StatusBar, Text } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { PRIMARY_COLOR, TERTIARY_COLOR } from '../../theme/commons/constains';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CarProducts } from './components/CarProducts';
import { ButonComponent } from '../../components/ButonComponent';
import { ModalCar } from './components/ModalCar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../theme/EstilosApp';

// Interface para los objetos Productos
export interface Product {
    id: number;
    nombre: string;
    precio: number;
    img: any; // puse any porque no se puede importar la imagen
    cantidad?: number; // Cantidad opcional para el carrito
    ranking: number; // Ranking de estrellas (1 a 5)
    dias: number; // Duración del paquete turístico en días
    descripcion: string; // Descripción del producto
    direccion: string; // Dirección del hotel 
}

export const Producto = () => {
    const products: Product[] = [
        { id: 1, nombre: 'BRAZIL', precio: 800, img: require('../../img/brazil.png'), ranking: 4.5, dias: 7, descripcion: 'Explora las playas y la cultura vibrante de Brasil.', direccion: 'Av. Atlântica, Río de Janeiro, Brasil' },
        { id: 2, nombre: 'ECUADOR', precio: 200, img: require('../../img/ecuador.png'), ranking: 4.0, dias: 5, descripcion: 'Descubre los Andes y la Amazonía en Ecuador.', direccion: 'Av. Amazonas, Quito, Ecuador' },
        { id: 3, nombre: 'JAPON', precio: 2500, img: require('../../img/japon.png'), ranking: 5.0, dias: 10, descripcion: 'Sumérgete en la tradición y modernidad de Japón.', direccion: 'Shinjuku, Tokio, Japón' },
        { id: 4, nombre: 'PARIS', precio: 1200, img: require('../../img/pais.png'), ranking: 4.8, dias: 8, descripcion: 'Visita la ciudad del amor y sus icónicos monumentos.', direccion: 'Champs-Élysées, París, Francia' },
        { id: 5, nombre: 'PERÚ', precio: 350, img: require('../../img/peru.png'), ranking: 4.2, dias: 6, descripcion: 'Explora Machu Picchu y la rica historia de Perú.', direccion: 'Av. El Sol, Cusco, Perú' },
    ];

    const [cart, setCart] = useState<Product[]>([]); // Estado para almacenar los productos guardados
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [showModalCar, setShowModalCar] = useState<boolean>(false); // Estado para controlar la visibilidad del ModalCar
    const [showModalProduct, setShowModalProduct] = useState<boolean>(false); // Estado para controlar ModalProducts
    const navigation = useNavigation();

    const handleGoHome = () => {
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
    };

    const handleAddToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                // Si el producto ya existe, incrementa la cantidad
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, cantidad: (item.cantidad || 1) + 1 } : item
                );
            } else {
                // Si el producto no existe, agrégalo con cantidad inicial de 1
                return [...prevCart, { ...product, cantidad: 1 }];
            }
        });
    };

    const handleOpenCart = () => {
        if (cart.length > 0) { // Solo abre el carrito si hay productos
            setShowModalCar(true); // Abre el ModalCar
        }
    };

    const handleOpenProductModal = (product: Product) => {
        setSelectedProduct(product);
        setShowModalProduct(true);
    };

    const handleRemoveFromCart = (productId: number) => {
        setCart((prevCart) => {
            return prevCart.filter((item) => item.id !== productId);
        });
    };

    return (
        <View>
            <StatusBar />

            <TitleComponent title="Paquete de Viajes" />

            <View style={styles.headerHome}>
                <View style={{ position: 'relative' }}>
                    <Icon
                        name="shopping-cart"
                        size={38}
                        color={cart.length === 0 ? '#ccc' : TERTIARY_COLOR}
                        onPress={handleOpenCart}
                    />
                    {cart.length > 0 && (
                        <View style={styles.carrito}>
                            <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>
                                {cart.reduce((total, item) => total + (item.cantidad || 1), 0)}
                            </Text>
                        </View>
                    )}
                </View>
            </View>

            <BodyComponent>
                <FlatList
                    data={products}
                    renderItem={({ item }) => (
                        <CarProducts product={item} addToCart={handleAddToCart} />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
                <ButonComponent title="Regresar al Inicio" handleLogin={handleGoHome} />
            </BodyComponent>

            <ModalCar
                isVisible={showModalCar}
                cart={cart}
                setShowModalCar={() => setShowModalCar(false)}
                removeFromCart={handleRemoveFromCart}
            />
        </View>
    );
};
