import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../css/Lenders.css';
import searchIcon from '../images/magnifying-glass.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tony from '../images/tony.jpg'
import Elon from '../images/Elon.jpeg'
import Mark from '../images/mark.jpg'
function ImgMediaCard({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Lend Money</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

function Lenders() {
  const userName = useSelector((state) => state.user.username);

  return (
    <div className='Lenders'>
      <nav className='lenders-navbar'>
        <h1>FlashFunds</h1>
        <div className='search-bar'>
          <img src={searchIcon} alt='Search Icon' />
          <input type='text' placeholder='Search' className='search-input' />
          <button className='search-button'>Search</button>
        </div>
        <ul className='lenders-navbar-list'>
          <li>
            <NavLink exact to='/' activeClassName='active'>
              About
            </NavLink>
          </li>
          <li className='nav-space'>
            <NavLink to='/dash' activeClassName='active'>
              Dashboard
            </NavLink>
          </li>
          <li>
            <button>
              <NavLink to='/logout' activeClassName='active'>
                Logout
              </NavLink>
            </button>
          </li>
        </ul>
      </nav>
      <h2>Welcome back, {userName}</h2>
      <h3>Check out these Requests!!!</h3>
      <div className="card-row">
        <ImgMediaCard
          image={Tony} 
          title="Tony" 
          description="A loan of $15,000 helps a minority male Veteran-owned skincare business launch its inaugural line." // Pass the description here
        />
        <ImgMediaCard
          image={Mark}
          title="Mark" 
          description="A loan of $38,725 helps to launch a safe drinking water business, serving the community and providing employment in Kisugu, Kampala, Uganda." // Pass the description here
        />
        <ImgMediaCard
          image={Elon}
          title="Elon Musk" 
          description="A loan of $9,000 helps to increase access to mental health and wellness services." // Pass the description here
        />
      </div>
     </div>
  );
}

export default Lenders;
