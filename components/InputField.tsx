import { Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { useRef } from 'react';
import React from 'react';

const InputField = (props: any) => {
	const textRef = useRef<TextInput>(null);
	const {icon, placeholder, secureTextEntry=false, onChange, value} = props;
  return (
		<KeyboardAvoidingView style={styles.inputFieldBox}>
			<TouchableWithoutFeedback onPress={() => textRef.current?.focus()}>
				<View style={styles.inputField}>
					{icon && <Image source={icon} style={{height: 24, width: 24, tintColor: "#ADADAD"}} />}
					<TextInput
						ref={textRef}
						placeholder={placeholder}
						secureTextEntry={secureTextEntry}
						value={value}
						onChangeText={onChange}
						placeholderTextColor="#ADADAD"
					/>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
  )
};

export default InputField;

const styles = StyleSheet.create({
	inputFieldBox: {
		padding: 16,
		backgroundColor: "#F6F8FA",
		borderRadius: 50,
	},
	inputField: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	}
});