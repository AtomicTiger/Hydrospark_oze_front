import './SlideMenu.css';
import React from 'react';
import { Link } from 'react-router-dom';

function SlideMenu(props) {
    const MenuState = ['MenuStateHidden', 'MenuStateOpen', 'MenuStateClose'];
    return (
        <div className={MenuState[props.state]} >
            <Link className='SlideMenuButton' to="/"><p>Home</p></Link>
            <Link className='SlideMenuButton' to="/document"><p>Documentation</p></Link>
            <Link className='SlideMenuButton' to="/contact"><p>Contact</p></Link>
            {props.login
                ? <Link className='SlideMenuButton' to="/login"><p>Log in</p></Link>: <div/>}
        </div>
    );
}

export default SlideMenu;