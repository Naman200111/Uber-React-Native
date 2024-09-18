import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import Swiper from 'react-native-swiper'
import { onboarding } from '@/constants'
import CustomButton from '@/components/CustomButton'

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLastPage = currentIndex == onboarding.length - 1;

  return (
    <SafeAreaView style={styles.welcomeSafeView}>
      <TouchableOpacity style={styles.skipButton} onPress={() => router.replace("/(auth)/sign-up")}>
        <Text style={styles.skipTextStyles}>Skip</Text>
      </TouchableOpacity>
      <Swiper 
        ref={swiperRef}
        horizontal={true}
        loop={false}
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        {
          onboarding.map((item) => (
            <SafeAreaView style={styles.onboardingContent} key={item.id}>
              <Image source={item.image} style={styles.welcomeImageStyle}></Image>
              <Text style={styles.onboardingTitle}>{item.title}</Text>
              <Text style={styles.onboardingDescription}>{item.description}</Text>
            </SafeAreaView>
          ))
        }
      </Swiper>
      <CustomButton 
        currentIndex = {currentIndex}
        title = {isLastPage ? `Get Started` : `Next`}
        onPress = {() => isLastPage ? router.replace("/(auth)/sign-up") : swiperRef.current?.scrollBy(1)}
      />
    </SafeAreaView>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  welcomeSafeView: {
    display: 'flex',
    flexDirection: 'column',
    height: "100%",
  },
  skipButton: {
    paddingTop: 15,
    paddingRight: 20, 
    display: 'flex',
  },
  skipTextStyles: {
    fontWeight: "600",
    fontSize: 18,
    alignSelf: 'flex-end'
  },
  onboardingContent: {
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
  },
  welcomeImageStyle: {
    resizeMode: 'contain',
    width: '100%',
    height: 300,
  },
  onboardingTitle: {
    fontSize: 28,
    fontWeight: "700",
    width: "80%",
    alignSelf: 'center',
  },
  onboardingDescription: {
    fontSize: 17,
    fontWeight: "500",
    color: "#858585",
    width: "75%",
    alignSelf: 'center',
  }
});