import React, { useState } from 'react';
import axios from 'axios';
import './LoginMenu.css';

function LoginMenu() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      console.log(response.data); // handle the response as needed
    } catch (error) {
      console.error('Failed to log in:', error);
    }
    setEmail("");
    setPassword("");
  };
  
  return (
    <div id='LoginMenu'>
      <p className="loginTitle">LOG IN</p>
      <form className='loginForm' onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button id='LoginButtonForm' type='submit'>Log in</button>
      </form>
    </div>
  );
}

export default LoginMenu;