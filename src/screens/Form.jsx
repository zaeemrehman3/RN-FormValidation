import { View, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import InputFields from '../components/InputFields';
import Button from '../components/Button';
import Validation from '../utils/Validation';

const Form = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState(null);
      const [formData, setFormData] = useState([]);

const  submitFunc = () => {
  const result = Validation(email, password); 

    if (result !== null) {
      setError(result); 
      Alert.alert("Error", result);
      return;
    }

    setError(null);
    setFormData(prev => [...prev, { email, password }]);
    Alert.alert("Success", "Form submitted!");

    setEmail('');
    setPassword('');
  };

  return (
    <View>
      <InputFields
       email={email}
        setEmail={setEmail}
         password={password}
          setPassword={setPassword}
           />
      {error && <Text style={{ color: "red", marginLeft: 10 }}>{error}</Text>}
      <Button submitFunc={submitFunc} />
    </View>
  );
};

export default Form;