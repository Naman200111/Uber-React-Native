import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import React from 'react';

const Home = () => {
  const { user } = useUser();
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  )
};

export default Home;

const styles = StyleSheet.create({});