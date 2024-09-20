import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, Alert } from 'react-native'
import { images } from '@/constants';
import { ReactNativeModal } from 'react-native-modal';
import { useState } from 'react';
import InputField from '@/components/InputField';
import { icons } from '@/constants';
import React from 'react'
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import { useSignUp } from '@clerk/clerk-expo';

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [successSignUpModal, setSuccessSignUpModal] = useState(false);
  const [pendingVerificationModal, setPendingVerificationModal] = useState(false);
  const [verificationCode, setVerificationCode] = useState<any>();

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      setPendingVerificationModal(true);
    } catch (err: any) {
      // Alert.alert({
      //   title: 'error',
      // });
      console.error(JSON.stringify(err, null, 2))
    }
  }

  const onPressVerify = async () => {
    if (!isLoaded) {
      return
    }
    // router.replace("/(root)(tabs)/home")
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      })

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId });
        router.replace("/(root)/(tabs)/home");
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2))
      }
    } catch (err: any) {
      // Alert.alert({message: 'error'});
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <ScrollView style={{backgroundColor: "white"}}>
      <View style={styles.signUpPage}>
        <Image style={styles.signUpCar} source={images.signUpCar}/>
        <Text style={{paddingLeft: 25, fontSize: 24, fontWeight: "700"}}>Create your Account</Text>
        <View style={styles.form}>
          <View>
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
          onPress = {onSignUpPress}
          // onPress = {() => setPendingVerificationModal(true)}
          textStyle={{color: "#FFFFFF"}}
          cusBtnStyle={{
            backgroundColor: "#0286FF",
            margin: 10,
            marginHorizontal: 20,
          }}
        />
        {/* incomplete modal */}
        <ReactNativeModal isVisible={pendingVerificationModal} style={{backgroundColor: "white", maxHeight: 300, borderRadius: 20, margin: "auto", padding: 25, width: "90%"}}>
          <View style={{marginBottom: 30}}>
            <Text style={{fontWeight: "700", fontSize: 24, marginBottom: 5, marginTop: 20}}>Verification</Text>
            <Text>We've sent you a verification code on: {form.email}</Text>
          </View>
          <View style={{display: "flex", justifyContent: "center", gap: 10}}>
            <Text style={{color: "#333333", fontSize: 18, fontWeight: "500"}}>Code </Text>
            <InputField
              icon={icons.lock}
              placeholder="12345"
              value={verificationCode}
              onChange={(code: any) => setVerificationCode(code)}
            />
            <CustomButton
              title = "Verify Email"
              onPress = {() => onPressVerify()}
              // onPress = {() => router.replace("/(root)/home")}
              textStyle={{color: "#FFFFFF", fontWeight: "700", fontSize: 17}}
              cusBtnStyle={{
                backgroundColor: "rgb(20 182 20)",
                marginVertical: 10
              }}
            />
          </View>
        </ReactNativeModal>
        <ReactNativeModal isVisible={successSignUpModal} style={{backgroundColor: "white", maxHeight: 422, borderRadius: 20, margin: "auto", padding: 25}}>
          <View style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 20}}>
            <Image style={{height: 110, width: 110}}source={images.check}/>
            <Text style={{color: "#333333", fontSize: 28, fontWeight: "600"}}>Verified!</Text>
            <Text style={{color: "#858585", fontSize: 17, alignSelf: "center", textAlign: 'center', maxWidth: "90%"}}>You have successfully verified your account</Text>
            <CustomButton 
              title = "Browse Home"
              onPress = {() => router.replace("/(root)/home")}
              textStyle={{color: "#FFFFFF", fontWeight: "600"}}
              cusBtnStyle={{
                width: "80%",
                backgroundColor: "#0286FF",
                margin: 10,
                marginHorizontal: 20,
              }}
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
          cusBtnStyle={{backgroundColor: "#FFFFFF", borderColor: "#EBEBEB", borderWidth: 1, margin: 10, marginHorizontal: 20}}
          textStyle={{color: "#333333", fontWeight: 600, fontSize: 17}}
        />
        <View style={{display:"flex", flexDirection: "row", justifyContent: "center", gap: 5, margin: 30, alignItems: "center"}}>
          <Text style={{fontSize: 17, color: "#858585"}}>Already have an account?</Text>
          <Text onPress={() => router.replace("/(auth)/sign-in")} style={{color: "#0286FF", fontWeight: "700", fontSize: 17}}>Log In</Text>
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