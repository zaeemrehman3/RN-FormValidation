import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Button = ({submitFunc}) => {
  return (
    <View>
        <TouchableOpacity style={styles.button} onPress={submitFunc}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
     button : {
        backgroundColor : '#6200EE',
        paddingVertical : 15,
        borderRadius : 10,
        alignItems : 'center',
    },

    buttonText : {
        color : '#fff',
        fontSize : 18,
        fontWeight : 'bold',
    }
});