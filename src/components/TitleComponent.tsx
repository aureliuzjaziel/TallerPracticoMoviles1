import React from 'react'
import { Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/EstilosApp';

interface Props {
  title: string;
}

export const TitleComponent = ({ title }: Props) => {
  //console.log(title);
  const { height } = useWindowDimensions();

  return (
      <View style={{ height: height * 0.12 }}>
          <Text style={styles.title}>
              {title}
          </Text>
      </View>
  )
}