import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import FormView from './Views/FormView'
import { useState } from 'react'
import WelcomeView from './Views/WelcomeView'
import { useFonts } from 'expo-font'

const Views = [WelcomeView, FormView]
export default function App() {
  const [view, setView] = useState(0)
  const CurrentView = Views[view]
  const [fontsLoaded] = useFonts({
    Cabin: require('./assets/Cabin-italic.ttf'),
    Anton: require('./assets/Anton-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }
  return (
    <>
      <CurrentView
        onPress={() => {
          console.log('press')
          setView(1)
        }}
        onTimeout={() => {
          console.log('timeout')
          setView(0)
        }}
        delay={5 * 1000}
      />
      <StatusBar style='light' hidden={true} />
    </>
  )
}
