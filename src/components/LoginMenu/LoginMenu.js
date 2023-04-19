
import './LoginMenu.css';

function LoginMenu() {
  return (
    <div id='LoginMenu'>
      <p className="loginTitle">LOG IN</p>
      <form className='loginForm'>
        <div>
          <label >Email</label>
          <input placeholder='Email'></input>
          <label>Password</label>
          <input placeholder='Password'></input>
        </div>
        <button id='LoginButtonForm'>Log in</button>
      </form>
    </div>
  );
}

export default LoginMenu;