import { Animated } from 'react-native'

import { useRef, useEffect } from 'react'
const useWelcomeAnimations = () => {
  const button_spring = useRef(new Animated.Value(1)).current
  const rotate_or = useRef(new Animated.Value(0)).current
  const qr_spring = useRef(new Animated.Value(1)).current
  const fadeValue = useRef(new Animated.Value(0)).current
  const fadeOut = (cb) => {
    Animated.timing(fadeValue, {
      duration: 500,
      toValue: 0,
      useNativeDriver: false,
    }).start(cb)
  }
  const loopAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(button_spring, {
          toValue: 1.25,
          duration: 500,
          useNativeDriver: false,
          delay: 1000,
        }),
        Animated.spring(button_spring, {
          toValue: 1,
          tension: 20,
          friction: 1,
          useNativeDriver: false,
        }),
        Animated.spring(rotate_or, {
          delay: 500,
          toValue: 1,
          useNativeDriver: false,
          // duration: 1000,
          tension: 30,
          friction: 1,
        }),
        Animated.timing(qr_spring, {
          toValue: 1.25,
          duration: 500,
          useNativeDriver: false,
          delay: 1000,
        }),
        Animated.spring(qr_spring, {
          toValue: 1,
          tension: 20,
          friction: 1,
          useNativeDriver: false,
        }),
      ])
    ).start()
  }
  useEffect(() => {
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(loopAnimation)
  }, [])
  const spin = rotate_or.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })
  return {
    spin,
    button_spring,
    qr_spring,
    fadeValue,
    fadeOut,
  }
}

export default useWelcomeAnimations
