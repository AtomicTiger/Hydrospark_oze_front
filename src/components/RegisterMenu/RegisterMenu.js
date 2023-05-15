import React, { useState } from 'react';
import axios from 'axios';
import './RegisterMenu.css';
import { useNavigate } from "react-router-dom";

function RegisterMenu() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reppassword, repsetPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      navigate("/");
      const response = await axios.post('http://localhost:3000/register', { email, password,reppassword });
      console.log(response); // handle the response as needed
      
    } catch (error) {
      console.error('Failed to log in:', error);
    }
  };

  return (
    <div id='RegisterMenu'>
      <p className="registerTitle">REGISTER</p>
      <form className='registerForm' onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
          <label>Password</label>
          <input type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <label>Repeat Password</label>
          <input type='password'
            placeholder='Password'
            value={reppassword}
            onChange={(e) => repsetPassword(e.target.value)}
          ></input>
        </div>
        <button id='RegisterButtonForm' type='submit'
        >Register</button>
      </form>
    </div>
  );
}

export default RegisterMenu;