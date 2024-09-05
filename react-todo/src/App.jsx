import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import TodoList from './components/TodoList'; // Import the TodoList component

function App() {
  return (
    <div className="App">
      <h1>Todo Application</h1>
      <TodoList /> {/* Render the TodoList component */}
    </div>
  );
}

export default App;
