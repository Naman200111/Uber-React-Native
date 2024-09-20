import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import React from 'react';

const Home = () => {
  const { user } = useUser();
  return (
    <View>
      {/* <SignedIn> */}
        <Text>Home</Text>
      {/* </SignedIn> */}
      {/* <SignedOut>
        <Link href="/(auth)/sign-in">
          <Text>Sign In</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </SignedOut> */}
    </View>
  )
};

export default Home;

const styles = StyleSheet.create({});