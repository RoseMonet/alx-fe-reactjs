import WelcomeMessage from 'alx-react-app/src/components/WelcomeMessage.jsx';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from 'alx-react-app/src/components/Header.jsx';
import MainContent from 'alx-react-app/src/components/MainContent.jsx';
import Footer from 'alx-react-app/src/components/Footer.jsx';
import UserProfile from 'alx-react-app/src/components/UserProfile.jsx';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <WelcomeMessage />

      <Header />
      <MainContent />
      <Footer />

      <Counter />

      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </>
    
  )
}

export default App
