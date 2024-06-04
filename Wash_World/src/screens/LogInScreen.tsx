import React, { useEffect, useRef } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
//import { setLogin } from '../reducers/authReducer';
import { signin } from '../reducers/userReducer'
import { useNavigation } from '@react-navigation/native'

const LoginScreen: React.FC = () => {
  const formRef = useRef(null)
  const navigation = useNavigation()
  const dispatch = useDispatch<any>()
  //@ts-ignore
  const signInStatus = useSelector(state => state.user.signInStatus)
  useEffect(() => {
    if (signInStatus === 'succeeded') {
      //@ts-ignore
      navigation.navigate('Home')
    }
  }, [signInStatus])
  const handleContinueAsGuest = () => {
    // dispatch(setLogin(true)); // Set logged in state to true for guest
  }

  const handleSignIn = () => {
    if (formRef.current === null) {
      // formRef.current[0].val!=""
      ///TODO: kontola vstupnich hodnot
      return false
    }
    const formData = {
      userName: formRef.current[0].value,
      password: formRef.current[1].value,
    }

    dispatch(signin(formData))
  }

  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>LOGIN </Text>
      <Text>STS:{signInStatus}</Text>
      <form ref={formRef}>
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
        <TouchableOpacity
          style={{ backgroundColor: 'indigo', padding: 15, borderRadius: 5 }}
          onPress={handleSignIn}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
            Login
          </Text>
        </TouchableOpacity>
      </form>
    </View>
  )
}

export default LoginScreen
