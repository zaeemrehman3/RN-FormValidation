import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Validation = (email, password) => {

  if (!email || !password) {
    return "All fields are required!";
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return "Enter a valid email!";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters!";
  }

  return null;
};

export default Validation;