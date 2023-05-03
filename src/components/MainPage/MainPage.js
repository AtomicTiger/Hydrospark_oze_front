
import LoginMenu from '../LoginMenu/LoginMenu';
import RegisterMenu from '../RegisterMenu/RegisterMenu';
import './MainPage.css';
// import BubbleContainer from '../BubbleContainer/BubbleContainer';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';

function MainPage() {
  return (
    <div className='MainPage'>
      <LoginMenu></LoginMenu>
      <RegisterMenu></RegisterMenu>
    </div>
  );
}

export default MainPage;
