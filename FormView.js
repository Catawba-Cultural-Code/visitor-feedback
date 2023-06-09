import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { WebView } from 'react-native-webview'
import useTimeout from './useTimeout'
const FEEDBACK_URL = 'http://visitor-feedback.catawbaculture.org'

export default function FormView({ onTimeout, delay }) {
  const [restart, clear, isActive] = useTimeout(() => onTimeout(), delay, true)

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{ flex: 1 }}
      onPress={() => restart()}
    >
      <WebView
        source={{ uri: FEEDBACK_URL }}
        style={{ flex: 1 }}
        // onNavigationStateChange={(navState) => {
        //   // Keep track of going back navigation within component
        //   console.log(navState)
        // }}
      ></WebView>
    </TouchableOpacity>
  )
}
