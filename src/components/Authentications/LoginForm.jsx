import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { Container, Form, Input, Button, I } from '../styles/styleLoginForm.jsx';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { setUser } from '../../Reducer/userSlices.js'; // Adjust the import path accordingly
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); // Initialize useDispatch

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const checkImageExists = async (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };
  
  const constructImageUrl = async (username) => {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'jfif'];
    
    for (const extension of imageExtensions) {
      const imageUrl = `https://backtade-2.onrender.com/uploads/${username}.${extension}`;
      const exists = await checkImageExists(imageUrl);
      
      if (exists) {
        return imageUrl; // Return first existing image URL
      }
    }
  
    return null; // No image found
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post('https://backtade-2.onrender.com/login', {
        username,
        password,
      });

      // Check if login is successful based on response
      if (result.status === 200) {
        const userImage = await constructImageUrl(username);
        // Dispatch the setUser action to update the Redux store
        dispatch(setUser({
          _id: result.data.user._id, // Include the user ID
          username: result.data.user.username,
          image: userImage,
          role: result.data.user.role,
          password: result.data.user.password,
        }));
        // Navigate to the home page upon successful login
        navigate('/home');
      }
    } catch (error) {
      console.error('Login error:', error);
      // Display a toast notification for the error
      toast.error('Login failed! Please check your username and password.');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <I src='./Logo.png' alt='Logo' />
        <Input
          type='text'
          placeholder='Username'
          name='username'
          value={username}
          onChange={handleUsernameChange}
        />
        <Input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type='submit'>Login</Button>
      </Form>
      <ToastContainer /> {/* Add the ToastContainer component */}
    </Container>
  );
};

export default LoginForm;
