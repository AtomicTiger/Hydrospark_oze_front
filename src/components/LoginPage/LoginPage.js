
import LoginMenu from '../LoginMenu/LoginMenu';
import RegisterMenu from '../RegisterMenu/RegisterMenu';
import './LoginPage.css';

function LoginPage(props) {
  return (
    <div id='LoginPage'>
      <LoginMenu></LoginMenu>
      <RegisterMenu></RegisterMenu>
    </div>
  );
}

export default LoginPage;
