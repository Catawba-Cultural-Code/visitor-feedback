import { Image, Text, TouchableOpacity, View, Animated } from 'react-native'
import THEME from '../../THEME'
import Svg, { Path } from 'react-native-svg'
import useWelcomeAnimations from './useWelcomeAnimations'
const LOGO = require('../../assets/logo.png')
const FEEDBACK_QR = require('../../assets/feedback-qr.png')

const WelcomeView = ({ onPress }) => {
  const { spin, qr_spring, button_spring, fadeOut, fadeValue } =
    useWelcomeAnimations()
  const handlePress = () => {
    fadeOut(onPress)
  }
  return (
    <View style={{ flex: 1, backgroundColor: THEME.blue }}>
      <Animated.View style={{ flex: 1, opacity: fadeValue }}>
        <View style={{ marginTop: 100 }}>
          <Text
            style={{
              color: 'white',
              fontSize: 50,
              textAlign: 'center',
              marginBottom: 50,
              fontFamily: 'Anton',
              color: THEME.navy,
            }}
          >
            Let us know how you enjoyed your visit
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <Animated.View
            style={{
              flex: 1,
              alignItems: 'center',
              transform: [{ scale: button_spring }],
            }}
          >
            <TouchableOpacity
              onPressOut={handlePress}
              style={{
                height: 75,
                width: 250,
                backgroundColor: THEME.white,
                justifyContent: 'center',
                borderRadius: 5,
                shadowColor: '#333',
                shadowOffset: {
                  width: 3,
                  height: 3,
                },
                shadowOpacity: 0.5,
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: THEME.navy,
                }}
              >
                Sign Guest Book
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Animated.View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                transform: [{ rotate: spin }],
              }}
            >
              <View
                style={{
                  height: 30,
                  width: 2,
                  backgroundColor: THEME.navy,
                  marginBottom: 5,
                }}
              ></View>
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 3,
                  borderColor: THEME.navy,
                }}
              ></View>
              <View
                style={{
                  height: 30,
                  width: 2,
                  backgroundColor: THEME.navy,
                  marginTop: 5,
                }}
              ></View>
            </Animated.View>
            <Text
              style={{
                fontWeight: 'bold',
                color: THEME.navy,
                fontSize: 20,
                position: 'absolute',
              }}
            >
              OR
            </Text>
          </View>
          <Animated.View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              transform: [{ scale: qr_spring }],
            }}
          >
            {/* <Blob /> */}
            <View style={{ flex: 1, width: 300, height: 300 }}>
              <Svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
                <Path
                  fill='#FFF'
                  d='M62.6,-50.5C76.5,-32.3,80.2,-6.6,73.9,15.2C67.6,37,51.3,54.9,30.7,65.6C10,76.2,-15.1,79.7,-35,70.8C-54.9,61.9,-69.7,40.6,-74.3,17.7C-78.9,-5.2,-73.4,-29.7,-59.3,-47.8C-45.3,-66,-22.6,-77.9,0.8,-78.5C24.3,-79.2,48.6,-68.7,62.6,-50.5Z'
                  transform='translate(100 100)'
                />
              </Svg>
            </View>
            <Image
              source={FEEDBACK_QR}
              style={{ width: 150, height: 150, position: 'absolute' }}
            />
          </Animated.View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{
              backgroundColor: THEME.navy,
              width: 150,
              height: 150,
              borderRadius: 150,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 25,
            }}
          >
            <Image source={LOGO} style={{ width: 150, height: 150 }} />
          </View>
        </View>
        {/* <Rabbit /> */}
      </Animated.View>
    </View>
  )
}

export default WelcomeView
