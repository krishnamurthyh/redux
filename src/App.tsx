import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import FieldDisplay from './components/FieldDisplay';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        REDUX
        <FieldDisplay />
      </div>
    </Provider>
  );
}

export default App;
