import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native'
import { WebView } from 'react-native-webview'
import { useEffect, useRef } from 'react'
import THEME from '../../THEME'
const FEEDBACK_URL = 'http://visitor-feedback.catawbaculture.org'

export default function FormView({ onTimeout, delay }) {
  const fade_view = useRef(new Animated.Value(1)).current

  const fade_out = () => {
    Animated.timing(fade_view, {
      useNativeDriver: false,
      duration: 5000,
      toValue: 0,
      delay,
    }).start()
  }

  useEffect(() => {
    fade_view.addListener(({ value }) => {
      console.log(value)
      if (value === 0) {
        onTimeout()
      }
    })
    fade_out()
  }, [])
  const handleStop = () => {
    fade_view.stopAnimation()
    fade_view.setValue(1)
    fade_view.resetAnimation()
    fade_out()
  }
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{ flex: 1, backgroundColor: THEME.navy }}
      onPress={() => handleStop()}
    >
      <Animated.View style={{ flex: 1, opacity: fade_view }}>
        <WebView source={{ uri: FEEDBACK_URL }} style={{ flex: 1 }}></WebView>
      </Animated.View>
    </TouchableOpacity>
  )
}
