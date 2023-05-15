import './UserPage.css';
import Device from '../Device/Device';
import axios from 'axios';
import { useEffect, useState } from 'react';


function UserPage() {
  const [id, setID] = useState("64621715de8e4fab450c6ad8"); // Store the user ID obtained from the login process (currently hardcoded for demonstration)
  const [email, setEmail] = useState("");
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/getUserData/${id}`);
        setEmail(response.data.email);
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
