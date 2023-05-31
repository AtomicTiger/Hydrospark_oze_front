import './Navbar.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Link } from 'react-router-dom';
import SlideMenu from '../SlideMenu/SlideMenu';
import { useState } from 'react';
import Session from 'react-session-api'

function Navbar(props) {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const BubbleArray = [];
  for(let i =0; i<5;i++){
    let right = getRandomInt(-50,80);
    let top = getRandomInt(-50,10);
    let size = getRandomInt(50,80)
    BubbleArray.push({right:right, top:top, size: size});
  }
  const [SlideMenuClass, setSlideMenuClass]= useState(0);
  const SlideMenuChange = (arg)=>{
    setSlideMenuClass(arg)
  }

  console.log(props.id);

  return (
    <div className='Navbar'>
        <div className='LogoBox'>
            <img src = {require('./hydrospark.png')}></img>
            <div>HydroSpark</div>
        </div>
        <div className='Menu'>
          <div className="Bubbbles">
            {BubbleArray.map(function(object, i) {return <div style={{backgroundColor:"rgba(255, 255, 255, 0.2)", borderRadius:"100%", position:"fixed", right:object.right, top:object.top, width:object.size, height:object.size}} key={i}></div>;})}
          </div>
          <Link className='MenuButton' to="/"><p>Home</p></Link>
          <Link className='MenuButton' to="/contact"><p>Contact</p></Link>
          {Session.get("UserId") === undefined
           ? <Link id='LoginButton' to="/login"><p>Log in</p></Link>
           : <Link id='LoginButton' to="/user"><p>User Page</p></Link>
          }

          <BurgerMenu onBurgerChange={SlideMenuChange}></BurgerMenu>
          <SlideMenu login={props.login} state={SlideMenuClass}></SlideMenu>
        </div>

    </div>
  );
}

export default Navbar;