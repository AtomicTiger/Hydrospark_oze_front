import './Navbar.css';

function Navbar() {

  return (
    <div className='Navbar'>
        <div className='Logo'>
            <div>HydroSpark</div>
        </div>
        <div className='Menu'>
            <div className='MenuButton'>Home</div>
            <div className='MenuButton'>Documentation</div>
            <div className='MenuButton'>Contact</div>
            <div className='LoginButton'>Log in</div>
        </div>
    </div>
  );
}

export default Navbar;