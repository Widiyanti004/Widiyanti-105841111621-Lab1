import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        color:'black',
        fontStyle:'italic',
      }}>Widiyanti love myself </Text>
      <Text style={{
        fontSize:20,
        textDecorationLine:'underline',
        textShadowColor:'blue',
        fontStyle: 'italic',
        color:'brown'}}>Widiyanti love myself
      </Text><Text style={{
        fontSize:50,
        fontStyle:'bold',
        color:'red'

      }}>Widiyanti love myself 50</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});3