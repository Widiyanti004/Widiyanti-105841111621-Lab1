import { TextInput } from 'react-native'
import React from 'react'

const Inputan = ({name,color}) =>{
    return(
            <TextInput placeholder ={`${ name }`}
            placeholderTextColor={'rgba (0, 0, 0, 0.5)'}
            style ={{
                borderWidth: 1,
                borderColor: 'transparent',
                borderRadius: 5,
                width: 350,
                height: 64,
                marginVertical: 8,
                paddingHorizontal: 10,
                backgroundColor: 'white',
                color: color,
                fontSize: 16,
                textAlign: 'left'
            }}
        secureTextEntry = {name === 'Password'}
        />
    )
}

export default Inputan