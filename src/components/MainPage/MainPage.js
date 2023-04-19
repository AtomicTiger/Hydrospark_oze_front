import BubbleContainer from '../BubbleContainer/BubbleContainer';
import LoginMenu from '../LoginMenu/LoginMenu';
import RegisterMenu from '../RegisterMenu/RegisterMenu';
import './MainPage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function MainPage() {
  return (
    <div className='MainPage'>
      <Navbar login={false}></Navbar>
      <div className='content'>
        <LoginMenu></LoginMenu>
        <RegisterMenu></RegisterMenu>
      </div>

      <Footer color={"rgba(255, 255, 255, 0.2)"}></Footer>
    </div>
  );
}

export default MainPage;
