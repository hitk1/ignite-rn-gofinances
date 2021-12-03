import React from 'react';
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
//instalação das fonts ->  expo install expo-font @expo-google-fonts/${specificFont}

import { Dashboard } from './src/screens/Dashboard';

import theme from './src/global/styles/theme'

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
      <Dashboard />
    </ThemeProvider>
  )
}
