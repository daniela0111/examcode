import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store'; 
import NavigationProvider from './Navigation'; 

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationProvider />
    </Provider>
  );
};

export default App;




