import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from './commons/constains';
export const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        opacity: 0.9,
        

    },
    contenedor1: {
        //flex: 1,
        backgroundColor: '#F7EEDD',
    },
    
    logoSumer: {
        width: 190,
        height: 190,
        position: 'relative',
        marginBottom: 100,
        top: 30,
        left: 30,
    },
    logoSumer2: {
        
        width: 100,
        height: 100,
        position: 'relative',
        marginBottom: 10,
        top: 30,
        left: 30,
    },
    registrar: {
        padding: 10,
        backgroundColor: '#41C9E2',
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'center',
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'center',
    },
    registros: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    datos: {
        borderRadius: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    },
    ingreso: {
        color: 'blue',
        marginTop: 20,
        textAlign: 'center',
    },
    containerBody: {
        backgroundColor: TERTIARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 45,
        paddingTop: 30
    },


    container: {
        margin: 50,
        height: 200,
        width: 300,
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.57)',
        borderRadius: 30,
        justifyContent: 'center',
        padding: 30,
    },

    ingresar: {
        padding: 10,
        backgroundColor: '#41C9E2',
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'center',
        borderRadius: 10,

    },
    
    inicioS: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',

    },
    
    contraseña: {
        color: 'blue',
        marginBottom: 20,
        textAlign: 'right',
    },
    registro: {
        color: 'blue',
        marginTop: 20,
        textAlign: 'center',
    },
    icon: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    iconHome: {
        position: 'relative',
        bottom: 10,
        right: 10,
    },
    textHome: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: 4,
        fontWeight: 'bold',
        marginBottom: 50,
        textShadowColor: 'rgba(178, 173, 173, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,  
        padding: 10, 
        borderRadius: 10,
    },
    containerCard: {
        backgroundColor: '#FFFFFF', // Fondo blanco
    borderRadius: 10, // Bordes redondeados
    padding: 15, // Espaciado interno
    marginBottom: 15, // Espaciado entre tarjetas
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Sombra para Android
    flexDirection: 'column', // Elementos en columna
    alignItems: 'center', // Centrar contenido horizontalmente
},
    
    textDescription: {
        fontSize: 12,
        color: '#777',
        marginTop: 5,
        fontStyle: 'italic',
    },
    titleProduct: {
        fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    },
    imgProduct: {
        width: '100%', // Imagen ocupa todo el ancho
        height: 150, // Altura fija
        borderRadius: 10, // Bordes redondeados
        marginBottom: 10, // Espaciado debajo de la imagen
    },
    containerModal: {
        flex: 2,
        backgroundColor: 'rgba(109, 149, 124, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentModal: {
        padding: 20,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 10
    },
    headerModal: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10
    },
    titleModal: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    imageModal: {
        width: 200,
        height: 200
    },
    containerImage: {
        alignItems: 'center'
    },
    containerIcon: {
        flex: 1,
        alignItems: 'flex-end'
    },
    volver: {
        padding: 10,
        backgroundColor: '#38d692',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 30,
        textAlign: 'center',
        borderRadius: 100,
      },
      containerQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantity: {
        height: 50,
        width: 50,
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    buttonTextQuantity: {
        color: SECONDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantity: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonAddCar: {
        backgroundColor: PRIMARY_COLOR,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10
    },
    buttonTextAddCar: {
        color: SECONDARY_COLOR,
        fontWeight: 'bold'
    },
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerDescription: {
        flexDirection: 'row',
    },
    textHeaderTable: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#000"
    },
    
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    infoContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    hotelName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    textInfo: {
        fontSize: 14,
    color: '#555',
    marginLeft: 5,
    },
    addButton: {
        marginTop: 10, // Espaciado superior
        alignItems: 'center', // Centrar el botón horizontalmente
        justifyContent: 'center', // Centrar el contenido del botón
    },
    
    
    



});