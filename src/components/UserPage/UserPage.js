import './UserPage.css';
import Device from '../Device/Device';

function UserPage() {
  let username = "Mr.Dobi"
  return (
    <div id='UserPage'>
      <div className='UserTitle'>Welcome {username}</div>
      <Device></Device>
      <Device></Device>
      <Device></Device>
      <Device></Device>
      <Device></Device>
      <Device></Device>
      <Device></Device>
    </div>
  );
}

export default UserPage;
