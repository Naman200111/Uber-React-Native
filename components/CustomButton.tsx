import { StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = (props: any) => {
    const {
        title,
        lefticon,
        textStyle,
    } = props;
    return (
        <TouchableOpacity style={styles.btnStyle}>
            {lefticon ? <Image source={lefticon} style={{height: 20, width: 20}}></Image> : null}
            <Text style={styles.btnTextStyle} {...textStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default CustomButton;

const styles = StyleSheet.create({
    btnTextStyle: {
        margin: "auto",
        fontSize: 17,
    },
    btnStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 18,
        backgroundColor: "#0286FF",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 100,
    }
})