import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/EstilosApp';


interface Props{
    title: string;
    handleLogin: () => void;
    
  }

export const ButonComponent = ({title, handleLogin}:Props) => {

    return (
        <View>
            <TouchableOpacity   onPress={handleLogin}>
                <Text style={styles.ingresar}>INGRESAR</Text>
            </TouchableOpacity>
        </View>
    )
}
