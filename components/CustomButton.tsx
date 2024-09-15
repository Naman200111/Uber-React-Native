import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = (props: any) => {
    const {
        title,
    } = props;
    return (
        <TouchableOpacity style={styles.btnStyle} {...props}>
            <Text style={styles.btnTextStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default CustomButton;

const styles = StyleSheet.create({
    btnTextStyle: {
        color: "#FFFFFF",
        margin: "auto",
        fontSize: 17,
    },
    btnStyle: {
        
    }
})