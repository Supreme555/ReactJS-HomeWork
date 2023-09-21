// import logo from './logo.svg';
import './App.css';
import React from 'react';
import VivodComp from './components/VivodComp';

const array = [
  {
    name: 'Elena',
    text: 'good',
    avatar: '',
    statys: 'V seti',
  },
  {
    name: 'Max',
    text: 'normal',
    avatar: '',
    statys: 'Ne seti',
  },
  {
    name: 'Alex',
    text: 'bad',
    avatar: '',
    statys: 'V seti',
  }
];
function App() {
  return (
    array.map(val => {
      return <VivodComp user={val} />
    })
  )
}

export default App;
