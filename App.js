import { useFonts } from 'expo-font'
import { Text, View }from 'react-native'

export default function App() {
  const [dapatFont] = useFonts({
    'MetroBlack': require('./assets/fonts/Metropolis-Black.otf'),
    'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroLight': require('./assets/fonts/Metropolis-Light.otf'),
    'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
    'MetroSemibold': require('./assets/fonts/Metropolis-SemiBold.otf'),
  });

  if (!dapatFont) return <Text>Font tidak ditemukan ...</Text>
  return (
    <View style={{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <Text style={{ fontFamiliy: 'MetroBlack'}}>Font Metro Black</Text>
      <Text style={{ fontFamiliy: 'MetroBold'}}>Font Metro Bold</Text>
      <Text style={{ fontFamiliy: 'MetroLight'}}>Font Metro Light</Text>
      <Text style={{ fontFamiliy: 'MetroMedium'}}>Font Metro Medium</Text>
      <Text style={{ fontFamiliy: 'MetroSemibold'}}>Font Metro SemiBold</Text>
      <Text>Font Biasa</Text>
    </View>
  );
}
 