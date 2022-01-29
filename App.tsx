import React from 'react';
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
//instalação das fonts ->  expo install expo-font @expo-google-fonts/${specificFont}

import { AppRoutes } from './src/routes/app.routes'
import theme from './src/global/styles/theme'

import { SignIn } from './src/screens/SignIn'
import { AuthProvider } from './src/hooks/auth'

export default function App() {
  const [isFontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  if (!isFontsLoaded) {     //expo install expo-app-loading -> instalação da splash default
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <SignIn />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  )
}
