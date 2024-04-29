
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AppBar,    Autocomplete,    Avatar,    Box,    Button, CardActionArea, CardActions, Rating, Stack, TextField, Toolbar, colors, styled  } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Code, Facebook, Instagram, Label, Phone, Twitter } from '@mui/icons-material';

export default function Home () {

  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase() ;
    <div   sx={{ width: 300, Color:'white' }} ></div>
    return {
    
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
   
  });
  


  return (

    
   
   
  <div style={{ 
      
      backgroundImage: "url('https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg')", // Replace 'https://example.com/background.jpg' with your image URL
      backgroundSize: '',
     
      backgroundPosition: 'center',
      height: '500px', // Adjust the height as needed
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
   
  
  
   <backgroundfootter >

<div   class="footer-layout" style={{backgroundColor:'black' ,width:'2000px' ,  height:'400px',marginTop:"1650px"}} >
<Box>

  <div  variant='h2'
    style={{color:'white',paddingTop:'80px' ,marginRight:'500px'}} >
       <Button type="text" variant='text'style={{color:'white'}} >About Us</Button> 
  </div>
  <div  variant='h2'
    style={{color:'white',marginTop:'-36px' ,marginLeft:'-80px'}}>
        <Button type="text" variant='text'style={{color:'white'}} ><Link to='/Dash'style={{textDecoration:"none",color:"white"}}>Contact Us
</Link></Button> 
  </div>

  <div  variant='h2'
    style={{color:'white',marginTop:'-37px' ,marginLeft:'300px'}}>
      <Button type="text" variant='text'style={{color:'white'}} >Help</Button>
  </div>
<div  variant='h2'
    style={{color:'white',marginTop:'150px' ,marginRight:'1200px'}}>
      <Button type="text" variant='contained'style={{color:'white',width:'180px',letterSpacing:'8px'}} ><Link to='/Feedback'style={{textDecoration:"none",color:'black'}}>Feedback
</Link></Button>
</div>
<div  variant='h2'
    style={{color:'white', marginTop:'-50px',marginRight:'100px'}} >
       <Button type="text" variant='text'style={{color:'white'}} >Follow Us</Button> 
  </div>
<div  style={{color:'white', marginTop:'20px',marginRight:'175px'}} >
<a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer"><Facebook style={{ width: '30px', height: '30px' }} /></a>&nbsp;&nbsp;&nbsp;&nbsp;
  
</div>

<div  style={{color:'white', marginTop:'-34px',marginLeft:'-75px'}} >
<a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer"><Instagram style={{ width: '30px', height: '30px' }} /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                           
</div>
                     
<div    style={{color:'white', marginTop:'-34px',marginLeft:'5px'}} >
<a href="https://www.twitter.com/YourProfile" target="_blank" rel="noopener noreferrer"><Twitter style={{ width: '30px', height: '30px' }} /></a>
  
</div>

<div>
<Autocomplete 
        id="grouped-demo"
        
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter)) }
      
        getOptionLabel={(option) => option.title}
        sx={{ width: 300,  }}
      
       style={{marginTop:'-34px',marginLeft:'1200px',}} 
        renderInput={(params) => <TextField {...params} label="Languages" />}
      
      />
</div>

{/* <div> */}
     


  </Box>
  </div>
</backgroundfootter>


<div>

  


    <Card style={{ maxWidth: 345,marginTop:"800px",marginLeft:'-1200px'}} >
        <CardActionArea>
          <Link to={'/Cards'} state={{ textDecoration: 'none', color: 'info' }}>
            <CardMedia
              component="img"
              height="240"
              image="https://i.pinimg.com/originals/2c/b7/b3/2cb7b343c255f4ed802d51a6e4e9db7c.png"
              alt="green iguana"
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            FOOD MENU
            </Typography>
            <Typography variant="body2" color="text.secondary">
            An every recipes comes with its own fascinating story. Here, we look at some of the world's most delicious dishes that everyone should try at least once
        
    
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to='/Cards' style={{ textDecoration: "none", color: "black" }}>MENU</Link>
          </Button>
        
        </CardActions>
      </Card>
      
 </div>

  </div> 
      
);
}

const top100Films = [ 
  {  title: 'English' },
  { title: 'Malayalam' }
  ];