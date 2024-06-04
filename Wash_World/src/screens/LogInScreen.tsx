import React from 'react';
import { View, Text, Button } from 'react-native';
import { }
//import { useDispatch } from 'react-redux';
//import { setLogin } from '../reducers/authReducer'; 

const LoginScreen: React.FC = () => {
//  const dispatch = useDispatch();

  const handleContinueAsGuest = () => {
   // dispatch(setLogin(true)); // Set logged in state to true for guest
  };

  const handleSignup = () => {
    // Handle signup logic (navigation or other actions)
  };

  return (
    // <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}> {/* Added inline styles for container */}
    //   <h1 style={{ margin: 0, padding: 0 }}>WASH</h1> {/* Added inline styles for h1 */}
    //   <h2 style={{ margin: 0, padding: 0 }}>WORLD</h2> {/* Added inline styles for h2 */}
    //   <p style={{ marginBottom: '20px' }}>Sign up for getting the best deals!</p> {/* Added inline styles for paragraph */}
    //   <button onClick={handleContinueAsGuest} style={{ margin: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Continue as Guest</button>
    //   <button onClick={handleSignup} style={{ margin: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign Up</button>
    // </div>
    <View>
      <Text style={{ fontSize: 40, textAlign: 'center' }}>WASH</Text> 
      <Text style={{ fontSize: 40, textAlign: 'center' }}>WORLD</Text>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>Sign in for getting the best deals!</Text>
      <Button onClick={() => console.log('Login with email clicked')} style={{ fontSize: 20, textAlign: 'center' }}>Login with email</Button>
      <Button onClick={() => console.log('Sign up clicked')} style={{ fontSize: 20, textAlign: 'center' }}>Sign up</Button>
      <Button onClick={handleContinueAsGuest} style={{ margin: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Continue as Guest</Button>

    </View>
  );
};

export default LoginScreen;
