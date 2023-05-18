
import './MainPage.css';

function MainPage() {
  return (
    <div className='MainPage'>
      <div className="phoBox">
        <img  src={require('./phone.png')} alt="Mobile phone showcasing the Hydrospark Mobile App"></img>
      </div>
      <div className='Aside'>
        <h1>Witaj w Hydrospark</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
mollit anim id est laborum.</p>
        <div className="buttonCont">
          <img src={require('./ios.png')} alt="Download on Appstore Button"></img>
          <img src={require('./gplay.png')} alt="Download on Google Play Button"></img>
        </div>
      </div>
    </div>
  );
}

export default MainPage;