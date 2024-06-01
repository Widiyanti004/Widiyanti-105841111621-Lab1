import { StyleSheet, Text, View, Image , ScrollView } from 'react-native'
import React from 'react'

const App = () =>  {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#000'
    }}>
      <Image source={require('./assets/kopi.jpg')}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.5,
        zIndex: -1,
      }}
      resizeMode="cover"
      />
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
        <Image source={require('./assets/logo-kopi.png')}
        style={{
          width: 200,
          height: 200,
          marginTop: 50,
          opacity: 1,
          zIndex: 1,
      }}
      />
      <Text style={{
        color: 'white',
        fontSize: 28,
        fontWeight: '300',
        textAlign: 'center',
        marginTop: 20,
      }}>
        Selamat Datang di Dunia Kopi
      </Text>
      <Text style={{
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
      }}>
        Rasakan kehangatan secangkir kopi yang menyala di pagi hari, mengusir dingin dan membawa semangat baru untuk memulai petualanganmu.  
      </Text>
      <Text style={{
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
      }}>
        Temukan aroma yang menggoda dari biji kopi yang dipanggang dengan cinta, mengisi ruangan dengan kesegaran yang menggugah selera.
      </Text>
      <Text style={{
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
      }}>
        jelajahi dunia rasa yang tak terbatas, dari pahit hingga manis, dari yang lembut hingga kuat, di setiap tetes kopi yang kamu nikmati.
      </Text>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
      }}>
      <View style={{
        marginHorizontal: 10
      }}>
        <Text style={{
          width: 100,
          height: 50,
          color: 'white',
          backgroundColor: 'red',
          textAlign: 'center',
          lineHeight: 50,
          fontSize: 20,
          borderRadius: 10,
        }}>
          Login
        </Text>
        </View>
        <View style={{
        marginHorizontal: 10
      }}>
        <Text style={{
          width: 100,
          height: 50,
          color: 'white',
          backgroundColor: 'blue',
          textAlign: 'center',
          lineHeight: 50,
          fontSize: 20,
          borderRadius: 10,
        }}>
          Register
        </Text>
        </View>
      </View>
    </ScrollView>
  </View>
  )
}

export default App;