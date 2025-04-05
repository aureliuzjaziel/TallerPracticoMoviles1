import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from './commons/constains';
export const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        opacity: 0.9,


    },

    headerHome: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20,
        marginTop: -30,
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

        width: 120,
        height: 120,
        position: 'relative',
        marginBottom: 20,
        top: 10,
        alignSelf: 'center',

    },

    title: {
        color: TERTIARY_COLOR,
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 30
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
        backgroundColor: '#FFFFFF', 
        borderRadius: 10, 
        padding: 15, 
        marginBottom: 15, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3, 
        flexDirection: 'column', 
        alignItems: 'center', 
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
        width: '100%', 
        height: 150,
        borderRadius: 10, 
        marginBottom: 10, 
    },
    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentModal: {
        width: '90%', 
        backgroundColor: '#FFFFFF', 
        borderRadius: 15, 
        padding: 20, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5, 
    },
    headerModal: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottomWidth: 1, 
        borderBottomColor: '#ccc', 
        paddingBottom: 10, 
        marginBottom: 15, 
    },
    titleModal: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#333', 
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
        marginTop: 10, 
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    cartItemInfo: {
        marginLeft: 10, 
        flex: 1, 
    },

});