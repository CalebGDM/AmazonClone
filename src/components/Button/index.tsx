import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface ButtonProps{
    text: string,
    onPress: () => void,
}

const Button = ({ text, onPress} : ButtonProps) => {
    return (
        <TouchableOpacity style={styles.root} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    root: {        
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e49911',
        marginVertical: 10,
        borderRadius: 5,
        
    },
    text: {
        fontSize: 16,
        color: 'black'
    },
});

export default Button
