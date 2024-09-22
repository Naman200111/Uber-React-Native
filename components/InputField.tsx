import { Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';

const InputField = (props: any) => {
	const {icon, placeholder, secureTextEntry=false, onChange, value} = props;
 	return (
		<KeyboardAvoidingView style={styles.inputFieldBox} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<TouchableWithoutFeedback>
				<View style={styles.inputField}>
					{icon && <Image source={icon} style={{height: 24, width: 24, tintColor: "#ADADAD"}} />}
					<TextInput
						placeholder={placeholder}
						secureTextEntry={secureTextEntry}
						value={value}
						onChangeText={onChange}
						placeholderTextColor="#ADADAD"
						style={{flex: 1}}
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