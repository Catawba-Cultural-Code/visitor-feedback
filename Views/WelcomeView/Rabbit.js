import React, { useEffect, useRef } from 'react'
import { Animated, Image } from 'react-native'
const BUNNY_RUN = require('../../assets/bunnypack_gifs/bunny_run_16fps.gif')
const Rabbit = () => {
  const position = useRef(new Animated.Value(-50)).current
  useEffect(() => {
    // position.addListener((val) => {
    //   if (val === 1300) {
    //     position.resetAnimation()
    //   }
    // })
    Animated.loop(
      Animated.timing(position, {
        toValue: 1300,
        duration: 20000,
        useNativeDriver: false,
        delay: 1000,
      })
    ).start()
  }, [position])
  return (
    <Animated.View style={{ posiiton: 'absolute', bottom: 10, left: position }}>
      <Image source={BUNNY_RUN} style={{ width: 75, height: 75 }} />
    </Animated.View>
  )
}

export default Rabbit
