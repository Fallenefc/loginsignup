import './App.css';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn'
import { useState } from 'react';
import LoggedIn from './components/LoggedIn/LoggedIn';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState('');

  const handleLogIn = (username) => {
    setIsLoggedIn(true);
    setUserInformation(username)
  }

  return (
    <div className="App">
      <SignUp/>
      <LogIn handleLogIn={handleLogIn}/>
      {isLoggedIn ? <LoggedIn name={userInformation}/> : null}
    </div>
  );
}

export default App;
