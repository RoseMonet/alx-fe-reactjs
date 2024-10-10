import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchResultsList from './components/SearchResultsList'

const App = () => {
  const [results, setResults] = useState([]);

  return (
      <div>
        <Navbar/>
        <Hero setResults={setResults} />
        <SearchResultsList results={results}/>
      </div>
  )
}

export default App