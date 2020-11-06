import React, {useState} from 'react'
import axios from 'axios'

function LogIn({handleLogIn}) {
    const [userInfo, setUserInfo] = useState ({
        username: '',
        password: ''
      })
      
      const BASE_URL = 'http://localhost:5000';
      const onSubmit = async (e) => {
          e.preventDefault();
          try {
            const response = await axios.post(`${BASE_URL}/login`, userInfo);
            console.log(response)
            handleLogIn(userInfo.username);
          }
          catch (_) {
            alert('Forbidden');
          }
      }
  
      const onChange = (e) => {
        // e.target.name === 'username' ? setUsername(e.target.value) : setPassword(e.target.value)
        e.target.name === 'username' ? setUserInfo({...userInfo, username: e.target.value}) : setUserInfo({...userInfo, password: e.target.value})
      }
  
    return (
      <div>
        Log In Form
        <form onSubmit={onSubmit}>
            <input type="text" name="username" value={userInfo.username} onChange={onChange}></input>
            <input type="password" name="password" value={userInfo.password} onChange={onChange}></input>
            <button type='submit'></button>
        </form>
      </div>
    )
  }
  

export default LogIn
