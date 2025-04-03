import React from 'react'
import { Text, useWindowDimensions, View } from 'react-native'

export const BodyComponent = () => {
    //hook de dimenciones
    const {height}=useWindowDimensions();
  return (
    <View>
        <Text>hola</Text>
    </View>
  )
}
