import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../reducers/userReducer'
import { useNavigation } from '@react-navigation/native'
interface SignUpFormState {
  email: string
  password: string
  licensePlate: string
}

const SignUpScreen: React.FC = () => {
  const formRef = useRef(null)
  const navigation = useNavigation()
  //@ts-ignore
  const signUpStatus = useSelector(state => state.user.signUpStatus)
  useEffect(() => {
    if (signUpStatus === 'succeeded') {
      //@ts-ignore
      navigation.navigate('Login')
    }
  }, [signUpStatus])

  const dispatch = useDispatch<any>() 

  const handleSignUp = () => {
    if (formRef.current === null) {
      // formRef.current[0].val!=""
      ///TODO: kontola vstupnich hodnot
      return false
    }
    const formData = {
      userName: formRef.current[0].value,
      email: formRef.current[1].value,
      password: formRef.current[2].value,
      licensePlate: formRef.current[3].value,
    }

    dispatch(signup(formData))
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
      <Text>STS:{signUpStatus}</Text>
      <form onSubmit={handleSubmit} ref={formRef}>
        {/* Adjust background color if needed */}
        <Image
          source={require('./background.jpg')}
          resizeMode="cover"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
        {/* Assuming you have a background image named wash_world_background.jpg */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 36, color: 'white', marginBottom: 10 }}>
            WASH WORLD
          </Text>
          <Text style={{ fontSize: 16, color: 'white', marginBottom: 10 }}>
            We need more information about you:
          </Text>
          <TextInput
            placeholder="Name"
            autoCapitalize="none"
            style={{
              backgroundColor: '#e0e0e0',
              padding: 15,
              borderRadius: 8,
              borderColor: '#ccc',
              borderWidth: 1,
              marginBottom: 10,
            }}
          />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{
              backgroundColor: '#e0e0e0',
              padding: 15,
              borderRadius: 8,
              borderColor: '#ccc',
              borderWidth: 1,
              marginBottom: 10,
            }}
          />

          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={{
              backgroundColor: '#f2f2f2',
              padding: 10,
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
          <TextInput
            placeholder="License plate"
            autoCapitalize="characters"
            style={{
              backgroundColor: '#f2f2f2',
              padding: 10,
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
          <Text style={{ fontSize: 12, marginBottom: 10 }}>
            We need your plate for recognizing your car when you arrive
          </Text>
          <TouchableOpacity
            style={{ backgroundColor: 'indigo', padding: 15, borderRadius: 5 }}
            onPress={handleSignUp}
          >
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </form>
    </View>
  )
}

export default SignUpScreen


