
import LoginMenu from '../LoginMenu/LoginMenu';
import RegisterMenu from '../RegisterMenu/RegisterMenu';
import './LoginPage.css';

function MainPage() {
  return (
    <div className='LoginPage'>
      <LoginMenu></LoginMenu>
      <RegisterMenu></RegisterMenu>
    </div>
  );
}

export default MainPage;
