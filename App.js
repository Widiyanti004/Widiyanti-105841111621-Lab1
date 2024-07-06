import { View } from 'react-native'
import React from 'react'
import  Login from './component/pages/login'

const App = () => {
  return (
    <View style = {{
    flex: 1,
    backgroundColor: '#EEEEEE'
    }}>
      <Login />
</View>
)
}

export default App