
import LoginMenu from '../LoginMenu/LoginMenu';
import RegisterMenu from '../RegisterMenu/RegisterMenu';
import './LoginPage.css';

function LoginPage(props) {
  const onIdChange =(arg)=>{
    console.log("arg in LoginPage",arg);
    props.onIdChange(arg);
  }
  return (
    <div id='LoginPage'>
      <LoginMenu onIdChange={onIdChange}></LoginMenu>
      <RegisterMenu></RegisterMenu>
    </div>
  );
}

export default LoginPage;
