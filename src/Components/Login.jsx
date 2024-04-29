import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Change import to useNavigate

export const Login = () => {
  const [email, setEmail] = useState("");
  const [opass, setOpass] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Change useHistory to useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3006/login', {
        email,
        opass
      });
      if (response.data === "success") {
        setMessage("Login successful");
        navigate('/'); // Change history.push to navigate
      } else {
        setMessage("Invalid email or password");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Function to validate email using regex
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Check if email and password are not empty
  const isFormValid = () => {
    return email.trim() !== "" && opass.trim() !== "";
  };

  return (
    
    <div style={{ marginTop: "150px" }}>
      
      <Box
        style={{ marginTop: "100px", marginLeft: '559px' }}
        height={350}
        width={300}
        my={4}
        display="drop"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: '10px solid black',backgroundColor: '  rgba(255, 255, 355, 10)' }}
      >
        <br></br><br></br>
        <Typography variant="h4"> Login Page</Typography><br></br>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant='outlined'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br></br><br></br>
          <TextField
            label="Enter password"
            type='password'
            variant='outlined'
            value={opass}
            onChange={(e) => setOpass(e.target.value)}
          /><br></br><br></br>
          <Button type="submit" variant='contained' color='success' disabled={!isFormValid()}>Login</Button><br></br><br></br>
          Not a Member ? <Link to='/Signin'style={{textDecoration:"none",color:"sandybrown"}}>Sign Up</Link> 
        </form>
        {message && <Typography>{message}</Typography>}
        <br></br><br></br>
      </Box>
    </div>
  );
}

export default Login;
