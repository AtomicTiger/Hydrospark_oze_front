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
      <LoginMenu></LoginMenu>
      <RegisterMenu></RegisterMenu>
      <BubbleContainer color={"rgba(255, 255, 255, 0.2)"}></BubbleContainer>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;
