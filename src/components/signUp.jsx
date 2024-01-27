import React, { useState } from 'react';
//import { signupUser } from '../service/server';


const signUp = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');



  const handleLogin = () => {
    fetch('http://localhost:3000/sign_up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Name,Email, Password }),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Handle the response from the server, e.g., redirect or update UI
      })
      .catch(error => console.error('Error:', error));
    };



  const handleSignup = async (event) => {
    event.preventDefault();

    
      const response = await handleLogin({ Name, Email, Password });

      // Handle successful signup   , update state or redirect
      console.log('Signup successful:', response);
    // } catch (error) {
    //   // Handle signup error
    //   console.error('Signup error:', error.message);
    // }
  };



  
  
  return (
    <div className='container'>
      <form onSubmit={handleSignup}>
        <label>
          Name:
          <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Email:
          <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Password:
          <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        <br />
        <button type="submit" className='button'>Signup</button>
      </form>
    </div>
  );
};

export default signUp;