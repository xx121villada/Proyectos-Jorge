import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const options = ["Pomodoro", "Short Break", "Long Break"]

function Header({ time }) {
    return (
        <View style={styles.view}>
            {options.map((item, index) => (
                <TouchableOpacity key={index} style={styles.itemStyle}>
                    <Text style={styles.text}> {item} </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    itemStyle: {
        padding: 7,
        width: "33%",
        textAlign: 'center',
    },
    text: {
        textAlign: 'center',
        borderWidth: 2,
        fontSize:20,
        borderRadius:8,
    }
});