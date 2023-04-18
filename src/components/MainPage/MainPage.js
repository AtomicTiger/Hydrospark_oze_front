import BubbleContainer from '../BubbleContainer/BubbleContainer';
import LoginMenu from '../LoginMenu/LoginMenu';
import RegisterMenu from '../RegisterMenu/RegisterMenu';
import './MainPage.css';

function MainPage() {
  return (
    <div className='MainPage'>
      <LoginMenu></LoginMenu>
      <RegisterMenu></RegisterMenu>
      <BubbleContainer color={"rgba(255, 255, 255, 0.2)"}></BubbleContainer>
    </div>
  );
}

export default MainPage;
