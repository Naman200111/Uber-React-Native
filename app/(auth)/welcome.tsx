import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import Swiper from 'react-native-swiper'
import { onboarding } from '../../constants/index';

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.skipButton} onPress={() => router.replace("/(auth)/sign-up")}>
        <Text style={styles.skipTextStyles}>Skip</Text>
      </TouchableOpacity>
      <Swiper 
        ref={swiperRef}
        horizontal={true}
        // dot={<View style={styles.dotStyle}/>}
        // activeDot={<View style={styles.activeDotStyle}/>}
        loop={false}
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        {
          onboarding.map((item: any) => (
            
            <View key={item.id}>
              <Image source={item.image} style={styles.welcomeImageStyle}></Image>
              <Text>{item.title}</Text>
            </View>
          ))
        }
      </Swiper>
    </SafeAreaView>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  skipButton: {
    padding: 20, 
    display: 'flex',
  },
  skipTextStyles: {
    fontWeight: "600",
    fontSize: 18,
    alignSelf: 'flex-end'
  },
  dotStyle: {
    width: 32,
    // height: 10,
    margin: 20,
  },
  activeDotStyle: {
    width: 32,
    margin: 20
    // height: 10,
  },
  welcomeImageStyle: {
    resizeMode: 'contain',
    
  }
});