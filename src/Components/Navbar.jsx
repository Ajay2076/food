import { ThemeProvider } from '@emotion/react'
import { AppBar, Avatar, BottomNavigation, BottomNavigationAction, Box, Button,  Fab,  Toolbar, Typography , NavigationIcon } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div >
       <AppBar color="warning" >
       
      
            <Toolbar  >
       

{/* <div style={{background:'url("https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg")'}}></div> */}


            <Button variant='text'><Link to={'/'} state={{textDecoration:'none',color:'white'}}>
            <Avatar  sx={{ width: 56, height: 56 }}src="https://i.pinimg.com/200x150/5e/87/f2/5e87f26d3150a73aa6caf20634de26c6.jpg"/>&nbsp;&nbsp;
            </Link></Button>
                <Typography style={{marginLeft:'450px'}} variant='h3'align='center' color={'ActiveBorder'} >  ROYAL CHEF </Typography>&nbsp;&nbsp;
               
                <Button style={{marginLeft:'300px'}} variant='text' color='success'>
                  <Link to='/Login'style={{textDecoration:"none",color:"darkblue"}}>Log In</Link></Button>&nbsp;&nbsp;

                <Button variant='text' color='success'>
                  <Link to='/Signin'style={{textDecoration:"none",color:"sandybrown"}}>Sign Up</Link> </Button>&nbsp;
                    
     
      
            </Toolbar >
       
        
        </AppBar >
      
     
    </div>
   

  )
}

export default Navbar