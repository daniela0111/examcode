import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; 
import SignUpScreen from './screens/SignUpScreen'; 

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Provider store={store}>
      <SignUpScreen />
    </Provider>
  );
};

export default App;

