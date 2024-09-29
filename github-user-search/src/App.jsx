import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      {/* Rendering the Search component */}
      <Search />
    </div>
  );
}

export default App;