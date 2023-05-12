import './Navbar.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Link } from 'react-router-dom';

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
  return (
    <div className='Navbar'>
        <div className='LogoBox'>
            {/* <div>
              <svg id="svgLogo">     
                <defs id="defs2" />
                <g>
                    <path
                    id="path1086"
                    style={{fill:"#ffffff", fillOpacity:1, strokeWidth:0.229782}}
                    d="M 1.60723 0.17425 L -5.962618 8.55203 L -9.228023 19.67642 L -10.135583 24.89574 L -7.777221 30.252 L 0.51479 32.58674 L 8.89103 30.80132 L 13.62511 26.13184 L 12.16835 18.71524 L 6.34183 8.41458 L 1.60723 0.17425 z M 1.70955 12.8479 L 7.90349 19.27541 L 4.86182 21.51817 L 10.14625 24.87042 L 3.72959 29.02469 L 6.10515 26.11995 L -1.17069 22.15896 L 4.05876 19.79734 L -6.672257 14.70153 L 1.70955 12.8479 z " />
                </g>
              </svg>
            </div> */}
            <div>HydroSpark</div>
        </div>
        <div className='Menu'>
          <div className="Bubbbles">
            {BubbleArray.map(function(object, i) {return <div style={{backgroundColor:"rgba(255, 255, 255, 0.2)", borderRadius:"100%", position:"fixed", right:object.right, top:object.top, width:object.size, height:object.size}} key={i}></div>;})}
          </div>
          <Link className='MenuButton' to="/"><p>Home</p></Link>
          <Link className='MenuButton' to="/document"><p>Documentation</p></Link>
          <Link className='MenuButton' to="/contact"><p>Contact</p></Link>
          {props.login
           ? <Link id='LoginButton' to="/login"><p>Log in</p></Link>
           : <div className='bubbleMargin'></div>
          }

          <BurgerMenu></BurgerMenu>
        </div>

    </div>
  );
}

export default Navbar;