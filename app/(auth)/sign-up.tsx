import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { images } from '@/constants';
import { useState } from 'react';
import InputField from '@/components/InputField';
import { icons } from '@/constants';
import React from 'react'

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  return (
    <ScrollView style={{height: '100%', backgroundColor: "white"}}>
      <View style={styles.signUpPage}>
        <Image style={styles.signUpCar} source={images.signUpCar}/>
        <Text style={{padding: 25, fontSize: 24, fontWeight: "700"}}>Create your Account</Text>
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
    resizeMode: "contain",
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