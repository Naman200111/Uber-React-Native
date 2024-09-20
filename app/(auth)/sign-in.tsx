import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { images } from '@/constants';
import Modal from 'react-native-modal';
import { useState } from 'react';
import InputField from '@/components/InputField';
import { icons } from '@/constants';
import React from 'react'
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <ScrollView style={{height: '100%', backgroundColor: "white"}}>
      <View style={styles.signInPage}>
        <Image style={styles.signInCar} source={images.signUpCar}/>
        <Text style={{paddingLeft: 25, fontSize: 24, fontWeight: "700"}}>Welcome </Text>
        <View style={styles.form}>
          <View>
            <Text style={styles.formItemTitle}>Email</Text>
            <InputField
              icon={icons.email}
              placeholder="Enter email"
              secureTextEntry={false}
              onChange={(value: string) => setForm({...form, email: value})}
              value={form.email}
            />
          </View>
          <View>
            <Text style={styles.formItemTitle}>Password</Text>
            <InputField
              icon={icons.lock}
              placeholder="Enter password"
              secureTextEntry={true}
              onChange={(value: string) => setForm({...form, password: value})}
              value={form.password}
            />
          </View>
        </View>
        <CustomButton 
          title = "Sign In"
          // onPress = {} // verify creds
          textStyle={{color: "#FFFFFF"}}
          cusBtnStyle={{
            backgroundColor: "#0286FF",
            margin: 10,
            marginHorizontal: 20,
          }}
        />
        <View style={{display: 'flex', flexDirection: 'row', padding: 10, alignItems: "center", gap: 10, justifyContent: "center"}}>
          <View style={{height: 1, backgroundColor: "#CED1DD", width: "35%"}} />
          <View><Text>Or</Text></View>
          <View style={{height: 1, backgroundColor: "#CED1DD", width: "35%"}} />
        </View>
        <CustomButton 
          title = "Log In With Google"
          lefticon = {icons.google}
          cusBtnStyle={{backgroundColor: "#FFFFFF", borderColor: "#EBEBEB", borderWidth: 1, margin: 10, marginHorizontal: 20}}
          textStyle={{color: "#333333"}}
        />
        <View style={{display:"flex", flexDirection: "row", justifyContent: "center", gap: 5, margin: 30, alignItems: "center"}}>
          <Text style={{fontSize: 17, color: "#858585"}}>Don't have an account?</Text>
          <Text onPress={() => router.replace("/(auth)/sign-up")} style={{color: "#0286FF", fontWeight: "700", fontSize: 17}}>Sign Up</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  signInPage: {
    display: 'flex',
    flexDirection: 'column',
  },
  signInCar: {
    width: "100%",
    resizeMode: "cover",
    height: 250,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    padding: 25,
  },
  formItemTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
    marginLeft: 5,
  }
});