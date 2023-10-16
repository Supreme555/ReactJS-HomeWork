import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import CreateCarForm from './features/add-item/CreateCarForm';

function App() {
  return (
    <div>
      <Counter />
      <CreateCarForm></CreateCarForm>
    </div>
  );
}

export default App;