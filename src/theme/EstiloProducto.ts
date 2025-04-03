import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderBottomWidth: 10,
        borderBottomColor: '#38d692',
        alignItems: 'center',
        //backgroundColor:'#e7f9f1',
        
      },
      
      img: {
        width: 200,
        height: 200,
        marginBottom: 8,
        borderRadius:30
      },
      nombres: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      precio: {
        fontSize: 20,
        color: '#888',
      },
      registrar: {
        padding: 10,
        backgroundColor: '#41C9E2',
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'center',
        borderRadius: 10,
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
      background: {
        flex: 1,
        resizeMode: 'cover',
        opacity: 0.9,
    },
});