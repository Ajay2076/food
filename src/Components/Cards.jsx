import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Alert, Avatar, Box, Button, CardActionArea, CardActions, Divider, IconButton, ListItemIcon, Menu, MenuItem, Rating, Stack, Tooltip } from '@mui/material';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const  Cards= () => {
  return (
    <div  >

<Card sx={{ maxWidth: 345,height:'510px',position:"",marginTop:'150px',marginLeft:'980px'}}  >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjB3cb3eTDDgtM4knMc1hJ-7MwTLGL5HOoiw&usqp=CAU"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Sandwich
            </Typography>
            <Typography variant="body2" color="text.secondary">
            A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.
            <br></br><br></br>
            <div style={{color:"black", variant:'h1'}} > PRICE:90</div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        {/* <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </Stack> */}
          <Button type='submit' variant='contained'style={{marginLeft:'220px'}} color='warning'><Link to='/Conact'style={{textDecoration:"none",color:'black'}}>Buy Now
</Link>
           
          </Button>
         
        </CardActions>
      </Card><br></br><br></br>
      

      <Card sx={{ maxWidth: 345,position:"top",marginTop:'-555px',marginLeft: '600px'}} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="https://pixelz.cc/wp-content/uploads/2018/07/hamburgers-uhd-4k-wallpaper.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Burger
            </Typography>
            <Typography variant="body2" color="text.secondary">
            A hamburger, or better known as a burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.
           <br></br> <br></br>
            <div style={{color:"black", variant:'h1'}} > PRICE:500</div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button  type='submit' variant='contained'style={{marginLeft:'220px'}} color='warning'><Link to='/Admin'style={{textDecoration:"none",color:'black'}}>Buy Now
</Link>
          
          </Button>
        </CardActions>
      </Card><br></br><br></br>
      
      <Card sx={{ maxWidth: 345,position:"top",marginTop:'-540px',marginLeft: '220px' }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/coconut-fish-curry-1823a09.jpg?quality=90&webp=true&resize=300,272"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Fish Moilee
           
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Fish moilee/moily or fish molee is a spicy fish and coconut dish of possible Portuguese or Indian origin. It is common in India, Malaysia and Singapore
            <br></br> <br></br>
            <div style={{color:"black", variant:'h1'}} > PRICE:450</div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button type='submit' variant='contained'style={{marginLeft:'220px'}} color='warning'><Link to='/Admin'style={{textDecoration:"none",color:'black'}}>Buy Now
</Link>
          
          </Button>
        </CardActions>
      </Card><br></br><br></br>
      

      <Card sx={{ maxWidth: 345 ,position:"top",marginTop:'-10px',marginLeft: '982px'  }}>
        <CardActionArea><br></br><br></br>
          <CardMedia
            component="img"
            height="250"
            image="https://t3.ftcdn.net/jpg/04/41/20/18/360_F_441201852_XQqp1wbAQj9udOC3iT7D0ahKgaf71bns.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Thalassery Biryani
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Thalassery chicken biryani also known as malabar chicken biryani is one of the most popular foods from kerala
            <br></br> <br></br>
            <div style={{color:"black", variant:'h1'}} > PRICE:200</div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button  type='submit' variant='contained'style={{marginLeft:'220px'}} color='warning'><Link to='/Admin'style={{textDecoration:"none",color:'black'}}>Buy Now
</Link>
          </Button>
        </CardActions>
      </Card><br></br><br></br>

      <Card sx={{ maxWidth: 345 ,position:"top",marginTop:'-550px',marginLeft: '599px'}}>
        <CardActionArea><br></br><br></br>
          <CardMedia
            component="img"
            height="250"
            image="https://wallpapercave.com/wp/wp6734913.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dosa
            </Typography>
            <Typography variant="body2" color="text.secondary">
            
Dosa is a thin, savoury crepe in South Indian cuisine made from a fermented batter of ground white gram and rice.Dosas are popular in South Asia as well as around the world.
            <br></br> <br></br>
            <div style={{color:"black", variant:'h1'}} > PRICE:50</div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button  type='submit' variant='contained'style={{marginLeft:'220px'}} color='warning'><Link to='/Admin'style={{textDecoration:"none",color:'black'}}>Buy Now
</Link>
          </Button>
        </CardActions>
      </Card><br></br><br></br>
      
      <Card sx={{ maxWidth: 345,position:"top",marginTop:'-570px',marginLeft: '220px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="https://t3.ftcdn.net/jpg/05/81/88/00/240_F_581880037_UUUdWpzct0wAGWRE9CbrEt0jhFOk8Jlx.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Idili
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Idli or idly is a type of savoury rice cake, originating from South India, popular as a breakfast food in Southern India and in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils and rice. 
            <br></br> <br></br>
            <div style={{color:"black", variant:'h1'}} > PRICE:50</div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button type='submit' variant='contained'style={{marginLeft:'220px'}} color='warning'><Link to='/Admin'style={{textDecoration:"none",color:'black'}}>Buy Now
</Link>
          </Button>  
        </CardActions>
      </Card>
      
    </div>
  )
}


export default Cards