import React from 'react'

import { LoginScreen } from './src/screen/LoginScreen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RegisterScreen } from './src/screen/RegisterScreen'



const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginScreen />
      {/* <RegisterScreen /> */}
    </SafeAreaView>
  )
}

export default App