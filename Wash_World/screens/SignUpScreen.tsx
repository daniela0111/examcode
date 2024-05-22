import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { signUp } from '../actions'; // Assuming this is a typed action creator

interface SignUpFormState {
  email: string;
  password: string;
  licensePlate: string;
}

const SignUpScreen: React.FC<SignUpFormState> = () => {
  const [formData, setFormData] = useState<SignUpFormState>({
    email: '',
    password: '',
    licensePlate: '',
  });
  const dispatch = useDispatch<any>(); // Assuming useDispatch has a generic type

  const handleSignUp = () => {
    dispatch(signUp(formData.email, formData.password, formData.licensePlate));
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}> {/* Adjust background color if needed */}
      <Image source={require('./background.jpg')} resizeMode="cover" style={{ position: 'absolute', width: '100%', height: '100%' }} /> {/* Assuming you have a background image named wash_world_background.jpg */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 36, color: 'white', marginBottom: 10 }}>WASH WORLD</Text>
        <Text style={{ fontSize: 16,color: 'white', marginBottom: 10 }}>We need more information about you:</Text>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          style={{ backgroundColor: '#f2f2f2', padding: 10, borderRadius: 5, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{ backgroundColor: '#f2f2f2', padding: 10, borderRadius: 5, marginBottom: 10 }}
        />
        <TextInput
          placeholder="License plate"
          autoCapitalize="characters"
          style={{ backgroundColor: '#f2f2f2', padding: 10, borderRadius: 5, marginBottom: 10 }}
        />
        <Text style={{ fontSize: 12, marginBottom: 10 }}>We need your plate for recognizing your car when you arrive</Text>
        <TouchableOpacity style={{ backgroundColor: 'indigo', padding: 15, borderRadius: 5 }} onPress={handleSignUp}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;


