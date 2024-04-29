import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Dash = () => {
    return (
        <div style={{ paddingInline: "500px" }}>
             <AppBar color="warning" >
    
      
       <Toolbar  >
     
       <IconButton
    size="medium"
    edge="start"
    color='inherit'
    aria-label="open drawer"
    sx={{ mr: 4 }}
    component={Link}
    
    to="/"
  >
    <HomeIcon/>
  </IconButton>&nbsp;&nbsp;

  <Typography style={{marginLeft:'480px'}} variant='h3'align='center' color={'ActiveBorder'} >  ROYAL CHEF </Typography>&nbsp;&nbsp;

  <Button style={{marginLeft:'500px'}} variant='text' color='success'>
                  <Link to='/Login'style={{textDecoration:"none",color:"darkblue"}}>Log In</Link></Button>&nbsp;&nbsp;


       </Toolbar >
       
       </AppBar >
    
            <Box
                height={200}
                width={180}
              
                my={4}
                display=""
                alignItems={"center"}
                gap={4}
                p={7}
                sx={{ border: "5px solid grey" , marginTop:'200px',marginLeft:'100px' }}  
            >
                <footer>
                    <div className="container">
                        {/* <p>&copy; {new Date().getFullYear()} My Website</p> */}
                        <div style={{ width: '300px', height: '300px', backgroundColor: 'InfoBackground', border: '1px solid #000', padding: '20px', boxSizing: 'border-box' }}>
                            <h3>Contact Us</h3>
                            <p>Follow us on social media:</p>
                            <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer"><Facebook style={{ width: '30px', height: '30px' }} /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer"><Instagram style={{ width: '30px', height: '30px' }} /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="https://www.twitter.com/YourProfile" target="_blank" rel="noopener noreferrer"><Twitter style={{ width: '30px', height: '30px' }} /></a>
                       
                        </div>
                    </div>
                </footer>
            </Box>
        </div>
    );
};

export default Dash;
