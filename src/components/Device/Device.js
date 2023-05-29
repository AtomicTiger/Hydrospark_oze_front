import './Device.css';
import { useState } from 'react';
import axios from 'axios';

function Device(props) {
  //console.log(props.device[props.index])
  const [NewName, setNewName] = useState(props.device.name);
  const id = props.device._id;
  const [ ButtonAction, setButtonAction] = useState(false);//false if input is not visible, true if visible and changing name
  const InputAction =(event)=>{
    setNewName(event.target.value);
  }


  const changeName = async (event) =>{
    if(!ButtonAction){
      console.log("whhhoooooooowwwies you want o change ethe name huh?");
      //console.log(event.target.previousSibling) //input
      //console.log(event.target.previousSibling.previousSibling) //title
      event.target.previousSibling.classList.remove('hidden');
      event.target.previousSibling.previousSibling.classList.add('hidden');
      setButtonAction(true)
    }else{
      event.target.previousSibling.classList.add('hidden');
      event.target.previousSibling.previousSibling.classList.remove('hidden');
      setButtonAction(false)
      //here zapytanie do bazy danych o zmianę imienia 
      try{
        const response = await axios.post('https://hydrospar.onrender.com/changename', { id, NewName });
        console.log(response);
        }catch{
        console.error('shit blow up')
      }
    }

  }

  return (
    <div className='Device'>
        <div>
            <div className='devbox1'>
                <p className='DeviceTitle'>{props.device.name}</p>
                <input className='DeviceInput hidden' type='text' onChange={InputAction}></input>
                <button onClick={changeName}>Change name</button>
            </div>
            <div className='devbox2'>
                <p>ID: {props.device._id}</p>
                <p>Info</p>
                <p>power: {props.device.power.$numberDecimal}</p>
                <p>power daily: {props.device.powerDaily.$numberDecimal}</p>
            </div>
        </div>
    </div>
  );
}

export default Device;
