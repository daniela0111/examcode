import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store'; 
import NavigationProvider from './src/Navigation'; 

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationProvider />
    </Provider>
  );
};

export default App;




