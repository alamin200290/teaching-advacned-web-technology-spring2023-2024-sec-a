'use client'

import { ChangeEvent, SyntheticEvent, useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleChangeFullName = (e : ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleChangeEmail = (e : ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e : ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e : ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  
  const handleSubmit = (e : SyntheticEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password || !confirmPassword) {
      console.log(fullName, email, password, confirmPassword);
      setError('All fields are required');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
     
    try {
      postData()
      setError("user created successfully");
    } catch (e : any) {
      setError(e);
    }
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');
    }
  };

  async function postData() {
   try {
     const formData = new FormData();
     formData.append('name', fullName);
     formData.append('email', email);
     formData.append('password', password);
     const response = await axios.post(process.env.NEXT_BACKEND_API_ENDPOINT + '/backend/signup/', formData, 
     {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
     });
    
     const data = response.data;
     console.log(data);
     } catch (error) {
     console.error(error);
     }
    }

  return (
    <>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name: </label>
          <input type="text" name="fullName" value={fullName} onChange={handleChangeFullName} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" value={email} onChange={handleChangeEmail} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" value={password} onChange={handleChangePassword} />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChangeConfirmPassword} />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </>
  );
};
