import './UserPage.css';
import Device from '../Device/Device';
import axios from 'axios';
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";
import { useEffect, useState } from 'react';
import Session from 'react-session-api';


function UserPage(props) {
  const {state} = useLocation();
  //const id = state.id;// Store the user ID obtained from the login process (currently hardcoded for demonstration)
  console.log(state);
  //const [email, setEmail] = useState("");
  const [NewId, setNewId] = useState("");
  const [devices,setDevices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://hydrospar.onrender.com/getUserData/${Session.get("UserId")}`);
        const response2 = await axios.get(`https://hydrospar.onrender.com/devices/${Session.get("UserId")}/getDevices`);
        Session.set("UserEmail" ,response.data.email);
        setDevices(response2.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    if (Session.get("UserId") !== "") {
      fetchUserData();
    }
  }, [Session.get("UserId")]);

  const changeNewId = (event)=>{
    setNewId(event.target.value)
  }
  const addDevice = async (event)=>{
    event.preventDefault()
    try{
      console.log(NewId)
      const response3 = await axios.post(`https://hydrospar.onrender.com/users/${Session.get("UserId")}/devices/${NewId}/createuserdevice`);
      console.log(response3)
    }
    catch{
      console.error("This device does not exist or something else went wrong")
    }
  }
  const Logout = ()=>{
    Session.clear();
    navigate('/');
  }

  // useEffect(() => {
  //   setID(props.UserData); // Set the user ID here or based on your login process
  // }, []);
  return (
    <div id='UserPage'>
      <div className='UserTitle'>Welcome {Session.get("UserEmail")}<button id="LogoutButton" onClick={Logout}>Log out</button>  </div>
      <div className='Device'>
        <div className='devbox2'>
          <p>To add your device use it's ID code here</p>
          <form>
            <input onChange={changeNewId} className='idInput' type="text"></input>
            <button id='addDevice' onClick={addDevice}>Add Device</button>
          </form>
        </div>
      </div>
      {devices.map((element, index) => (
        <Device device={element} key={index} />
      ))}

    </div>
  );
}

export default UserPage;
