import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const InputFields = ({ email, setEmail, password, setPassword }) => {

 return (
        <View style={styles.container}>
    <Text style={styles.heading}>Login</Text>
    <TextInput style={styles.input}
    placeholder='Email'
    value={email}
    onChangeText={setEmail}
    keyboardType='email-address'
    autoCapitalize='none'
    placeholderTextColor={'#999'}
    />

    <TextInput style={styles.input}
    placeholder='password'
    value={password} 
    onChangeText={setPassword}
    placeholderTextColor={'#999'}
    secureTextEntry={true}
    />
        </View>

  );
};

export default InputFields; 

const styles = StyleSheet.create({
     container : {
        justifyContent : "center",
        paddingHorizontal : 20,
        paddingTop : 40,
        backgroundColor : '#f0f0f0',
    },

    heading : {
        fontSize : 20,
        fontWeight : "bold",
        marginBottom : 30,
        textAlign : 'center',
        color : "#333",
    }, 

    input : {
        height : 50,
        borderColor : '#ccc',
        borderWidth : 1,
        marginBottom : 20,
        paddingHorizontal : 15,
        borderRadius : 10,
        backgroundColor : '#fff',
        fontSize : 16,
        color : '#333',
    }
});