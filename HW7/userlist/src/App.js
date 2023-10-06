import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserList from './userList';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
