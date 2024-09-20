import { StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = (props: any) => {
    const {
        title,
        lefticon,
        textStyle,
        cusBtnStyle,
        onPress
    } = props;
    return (
        <TouchableOpacity style={[styles.btnStyle, cusBtnStyle]} onPress={onPress}>
            {lefticon ? <Image source={lefticon} style={{height: 20, width: 20}}></Image> : null}
            <Text style={[styles.btnTextStyle, textStyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default CustomButton;

const styles = StyleSheet.create({
    btnTextStyle: {
        fontSize: 17,
    },
    btnStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        gap: 10,
        padding: 18,
        borderRadius: 100,
    }
})