/* eslint-disable prettier/prettier */

import React from "react";
import { Text, View, StyleSheet } from "react-native";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Trang chu</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        
    },
    text: {
        marginTop: 20,
        textAlign: "center",
        fontSize: 20
    }
})
export default HomeScreen