import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './component/pages/login'
import ForgotPassword from './component/pages/forgotPassword'
import SignUp from './component/pages/signUp'
import MainPage from './component/pages/mainPage'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "login">
        <Stack.Screen name="login" component={Login} options = {{headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options = {{headerShown: false }} />
        <Stack.Screen name="signUp" component={SignUp} options = {{headerShown: false }} />
        <Stack.Screen name="mainPage" component={MainPage} options = {{headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;