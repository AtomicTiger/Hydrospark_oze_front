import './UserPage.css';
import Device from '../Device/Device';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';


function UserPage(props) {
  const {state} = useLocation();
  const { id } = state;// Store the user ID obtained from the login process (currently hardcoded for demonstration)
  const [email, setEmail] = useState("");
  const [NewId, setNewId] = useState("");
  const [devices,setDevices] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://hydrospar.onrender.com/getUserData/${id}`);
        const response2 = await axios.get(`https://hydrospar.onrender.com/devices/${id}/getDevices`);
        setEmail(response.data.email);
        setDevices(response2.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    if (id !== "") {
      fetchUserData();
    }
  }, [id]);

  const changeNewId = (event)=>{
    setNewId(event.target.value)
  }
  const addDevice = async (event)=>{
    event.preventDefault()
    try{
      console.log("wooaaah you added a new device");
      console.log(NewId)
      // '/users/:userId/devices/:deviceId/createuserdevice'
      const response3 = await axios.post(`https://hydrospar.onrender.com/users/${id}/devices/${NewId}/createuserdevice`);
      console.log(response3)
    }
    catch{
      console.error("This device does not exist or something else went wrong")
    }


  }

  // useEffect(() => {
  //   setID(props.UserData); // Set the user ID here or based on your login process
  // }, []);
  return (
    <div id='UserPage'>
      <div className='UserTitle'>Welcome {email}</div>
      <div className='Device'>
        <div className='devbox2'>
          <p>To add your device sue it's ID code here</p>
          <form>
            <input onChange={changeNewId} className='idInput' type="text"></input>
            <button id='addDevice' onClick={addDevice}>Add Device</button>
          </form>
        </div>
      </div>
      {devices.map(element => (
        <Device device={element} key={element.id} />
      ))}

    </div>
  );
}

export default UserPage;
