import React, { ReactNode } from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { styles } from '../theme/EstilosApp';


interface Props {
  children: ReactNode;
}

export const BodyComponent = ({children}:Props) => {
    //hook de dimenciones
    const {height}=useWindowDimensions();
  return (
    <View style={{
      ...styles.containerBody,
      height: height * 0.88

  }}>
        {children}
    </View>
  )
}
