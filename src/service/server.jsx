// import React from 'react';
// import { useState, useEffect} from 'react'
// import axios from 'axios';



// const API_BASE_URL = 'http://localhost:3000';

// export const signupUser = async () => {
  
// //   const response1 = await axios.post(`${API_BASE_URL}/sign_up`, {
// //     // Replace these values with the actual user data
// //   //   name: '',
// //   //   email: '',
// //   //   password: '',
// //   // });
  
// //     //   body: {
// //     //     'Content-Type': '/json',
// //     //   },
// //     // });

// //     // Assuming your backend returns a JSON response
// //     return response1.data;
// //   // } catch (error) {
// //   //   // Handle errors here, such as logging or rethrowing
// //   //   console.error('Signup failed:', error.message);
// //   //   throw new Error('Signup failed');
// //   // }
// // };


// // export const signupUser = async (userData) => {
// //   const response = await fetch(`${API_BASE_URL}/signup`, {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json',
// //     },
// //     body: JSON.stringify(userData),
// //   });

// //   if (!response.ok) {
// //     throw new Error('Signup failed');
// //   }

// //   return response.json();

// //const [data, setDeta] = useState('')

// useEffect(() => {
//    post(`${API_BASE_URL}/sign_up`)
//   // .then((response) => {
//   //   return response.data
//   // })

//   // .catch((error) => {
//   //   console.log(error)
//   // })
//   .then(res => res.json())
//     .then(data => setData(data))
//     .catch(err=> console.log(err));

// } ,[]);
// };
