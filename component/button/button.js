import { Text, View } from 'react-native'
import React from 'react'

const ButtonComponent = ({ title, color}) =>  {
  return (
    <View style={{ marginHorizontal: 10 }}>
        <Text style= {{
            width: 100,
            height: 50,
            color: 'white',
            backgroundColor: color,
            textAlign: 'center',
            lineHeight: 50,
            fontSize: 20,
            borderRadius: 10,
            }}>{title}</Text> 
        </View> 
    )
}

export default ButtonComponent;

     