import './UserPage.css';
import Device from '../Device/Device';
import axios from 'axios';
import { useEffect, useState } from 'react';


function UserPage() {
  const [id, setID] = useState("64621715de8e4fab450c6ad8"); // Store the user ID obtained from the login process (currently hardcoded for demonstration)
  const [email, setEmail] = useState("");
  const [devices,setDevices] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/getUserData/${id}`);
        const response2 = await axios.get(`http://localhost:3000/devices/${id}/getDevices`);
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

  useEffect(() => {
    setID("64621715de8e4fab450c6ad8"); // Set the user ID here or based on your login process
  }, []);
  return (
    <div id='UserPage'>
      <div className='UserTitle'>Welcome {email}</div>
      {devices.map(element => (
        <Device device={element} key={element.id} />
      ))}
      
    </div>
  );
}

export default UserPage;
