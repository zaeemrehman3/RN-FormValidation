import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from '../screens/Form';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
   <Stack.Navigator>
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  );
};

export default AuthStack;