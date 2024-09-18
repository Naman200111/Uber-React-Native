import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput } from 'react-native'
import { images } from '@/constants';
import { ReactNativeModal } from 'react-native-modal';
import { useState } from 'react';
import InputField from '@/components/InputField';
import { icons } from '@/constants';
import React from 'react'
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [successSignUpModal, setSuccessSignUpModal] = useState(false);
  const [verificationSignUpModal, setVerificationSignUpModal] = useState(false);

  return (
    <ScrollView style={{backgroundColor: "white"}}>
      <View style={styles.signUpPage}>
        <Image style={styles.signUpCar} source={images.signUpCar}/>
        <Text style={{paddingLeft: 25, fontSize: 24, fontWeight: "700"}}>Create your Account</Text>
        <View style={styles.form}>
          <View style={styles.formItem}>
            <Text style={styles.formItemTitle}>Name</Text>
            <InputField
              icon={icons.profile}
              placeholder="Enter name"
              secureTextEntry={false}
              onChange={(value: string) => setForm({...form, name: value})}
              value={form.name}
            />
          </View>
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
          title = "Sign Up"
          onPress = {() => setVerificationSignUpModal(true)}
          textStyle={{color: "#FFFFFF"}}
        />
        {/* incomplete modal */}
        {/* <ReactNativeModal isVisible={verificationSignUpModal} style={{backgroundColor: "white", maxHeight: 300, borderRadius: 20, margin: "auto", padding: 25}}>
          <View style={{display: "flex", justifyContent: "center", gap: 10}}>
            <Text style={{color: "#333333", fontSize: 18}}>Code </Text>
            <TextInput style={{backgroundColor: "#F6F8FA", width: "100%", borderRadius: 10, padding: 10, marginTop: 10}} />
            <CustomButton 
              title = "Verify"
              onPress = {() => router.replace("/(root)/home")}
            />
          </View>
        </ReactNativeModal> */}
        <ReactNativeModal isVisible={successSignUpModal} style={{backgroundColor: "white", maxHeight: 422, borderRadius: 20, margin: "auto", padding: 25}}>
          <View style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 20}}>
            <Image style={{height: 110, width: 110}}source={images.check}/>
            <Text style={{color: "#333333", fontSize: 28}}>Verified!</Text>
            <Text style={{color: "#858585", fontSize: 17, alignSelf: "center", textAlign: 'center', maxWidth: "90%"}}>You have successfully verified your account</Text>
            <CustomButton 
              title = "Browse Home"
              onPress = {() => router.replace("/(root)/home")}
            />
          </View>
        </ReactNativeModal>
        <View style={{display: 'flex', flexDirection: 'row', padding: 10, alignItems: "center", gap: 10, justifyContent: "center"}}>
          <View style={{height: 1, backgroundColor: "#CED1DD", width: "35%"}} />
          <View><Text>Or</Text></View>
          <View style={{height: 1, backgroundColor: "#CED1DD", width: "35%"}} />
        </View>
        <CustomButton 
          title = "Log In With Google"
          lefticon = {icons.google}
          style={{backgroundColor: "#FFFFFF"}}
          textStyle={{color: "#333333"}}
        />
        <View style={{display:"flex", flexDirection: "row", justifyContent: "center", gap: 10, margin: 30}}>
          <Text>Already have an account?</Text>
          <Text onPress={() => router.replace("/(auth)/sign-in")} style={{color: "#0286FF", fontWeight: "700"}}>Log In</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  signUpPage: {
    display: 'flex',
    flexDirection: 'column',
  },
  signUpCar: {
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