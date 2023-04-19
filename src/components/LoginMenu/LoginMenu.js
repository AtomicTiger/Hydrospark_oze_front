
import './LoginMenu.css';

function LoginMenu() {
  return (
    <div id='LoginMenu'>
      <p className="loginTitle">LOG IN</p>
      <form className='loginForm'>
        <div>
          <label >Email</label>
          <input id='loginEmail'></input>
          <label>Password</label>
          <input id='loginPassword'></input>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginMenu;