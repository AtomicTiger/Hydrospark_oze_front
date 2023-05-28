import './SlideMenu.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Session from 'react-session-api'

function SlideMenu(props) {
    const MenuState = ['MenuStateHidden', 'MenuStateOpen', 'MenuStateClose'];
    return (
        <div className={MenuState[props.state]} >
            <Link className='SlideMenuButton' to="/"><p>Home</p></Link>
            <Link className='SlideMenuButton' to="/document"><p>Documentation</p></Link>
            <Link className='SlideMenuButton' to="/contact"><p>Contact</p></Link>
            {Session.get("UserId") === undefined
                ? <Link className='SlideMenuButton' to="/login"><p>Log in</p></Link>
                : <Link className='SlideMenuButton' to="/user"><p>User Page</p></Link>
            }
        </div>
    );
}

export default SlideMenu;