import WelcomeMessage from 'alx-react-app/src/components/WelcomeMessage.jsx';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from 'alx-react-app/src/components/Header.jsx';
import MainContent from 'alx-react-app/src/components/MainContent.jsx';
import Footer from 'alx-react-app/src/components/Footer.jsx';
import UserProfile from 'alx-react-app/src/components/UserProfile.jsx';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;