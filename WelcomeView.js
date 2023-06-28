import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native'
import Svg, { Path } from 'react-native-svg'
import Rabbit from './Rabbit'
import { useRef, useEffect } from 'react'

const WelcomeView = ({ onPress }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#051940' }}>
      <View style={{ marginTop: 100 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            textAlign: 'center',
            marginBottom: 50,
            fontFamily: 'Cabin',
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
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            // transform: [{ scale: bttnFloat }],
          }}
        >
          <TouchableOpacity
            onPressOut={onPress}
            style={{
              height: 75,
              width: 250,
              backgroundColor: '#0bbcee',
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
              style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}
            >
              Sign Guest Book
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{
              height: 30,
              width: 2,
              backgroundColor: '#fbc10b',
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
              borderColor: '#fbc10b',
            }}
          >
            <Text
              style={{ fontWeight: 'bold', color: '#fbc10b', fontSize: 20 }}
            >
              OR
            </Text>
          </View>
          <View
            style={{
              height: 30,
              width: 2,
              backgroundColor: '#fbc10b',
              marginTop: 5,
            }}
          ></View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
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
            source={require('./feedback-qr.png')}
            style={{ width: 150, height: 150, position: 'absolute' }}
          />
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('./logo.png')}
          style={{ width: 150, height: 150 }}
        />
      </View>
      {/* <Rabbit /> */}
    </View>
  )
}

export default WelcomeView
