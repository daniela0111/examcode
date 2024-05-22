import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { signUp } from './actions'; // Import your sign-up action

interface SignUpFormState {
  email: string;
  password: string;
  licensePlate: string;
}

const SignUpScreen: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormState>({
    email: '',
    password: '',
    licensePlate: '',
  });
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(signUp(formData.email, formData.password, formData.licensePlate));
  };

  return (
    <View>
      <Text>WASH WORLD</Text>
      <Text>We need more information about you:</Text>
      <TextInput
        value={formData.email}
        onChangeText={(email) => setFormData({ ...formData, email })}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        value={formData.password}
        onChangeText={(password) => setFormData({ ...formData, password })}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        value={formData.licensePlate}
        onChangeText={(licensePlate) =>
          setFormData({ ...formData, licensePlate })}
        placeholder="License plate"
        autoCapitalize="characters"
      />
      <Text>We need your plate for recognizing your car when you arrive</Text>
      <Button title="Next" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;
