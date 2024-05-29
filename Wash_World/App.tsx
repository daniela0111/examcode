import React from 'react';
//import { Provider } from 'react-redux';
//import { store } from './src/store'; 
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native'; // Correct import
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  homescreen: undefined; 
  loginscreen: undefined;
  signupscreen: undefined;
}

const App: React.FC = () => {
  return (
    // <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
};

export default App;




