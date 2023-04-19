
import './RegisterMenu.css';

function RegisterMenu() {
  return (
    <div id='RegisterMenu'>
      <p className="registerTitle">REGISTER</p>
      <form className='registerForm'>
        <div>
          <label>Email</label>
          <input placeholder='Email'></input>
          <label>Password</label>
          <input placeholder='Password'></input>
          <label>Repeat Password</label>
          <input placeholder='Password'></input>
        </div>
        <button id='RegisterButtonForm'>Register</button>
      </form>
    </div>
  );
}

export default RegisterMenu;