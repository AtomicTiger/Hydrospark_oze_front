import React, { useState } from 'react';
import axios from 'axios';
import './RegisterMenu.css';
import { useNavigate } from "react-router-dom";

function RegisterMenu() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reppassword, repsetPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://hydrospar.onrender.com/register', { email, password,reppassword });///połączenie do api na backendzie
      const response2 = await axios.post('https://hydrospar.onrender.com/login', { email, password });//logowanie po udanej rejestracji
      console.log(response2);
      navigate('/');//navigacja gdzie pozniej
    } catch (error) {
      setErrorMessage('Rejestracja nie powiodla sie. Sprawdz podane dane.');
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
        {errorMessage && <p className="errorParagraph">{errorMessage}</p>}
        <button id='RegisterButtonForm' type='submit'
        >Register</button>
      </form>
    </div>
  );
}

export default RegisterMenu;