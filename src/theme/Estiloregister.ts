import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        opacity: 0.9,
    },
    contenedor1: {
        flex: 1,
        backgroundColor: '#F7EEDD',
    },
    container: {
        margin: 50,
        height: 100,
        width: 300,
        borderRadius: 30,
        flex: 1,
        backgroundColor: '#ACE2E1',
        justifyContent: 'center',
        padding: 30,
    },
    logoSumer: {
        width: 150,
        height: 150,
        position: 'relative',
        top: -30,
        left: 50,
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

});