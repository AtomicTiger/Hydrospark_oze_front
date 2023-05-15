import './Device.css';

function Device(props) {
  console.log(props.device)
  return (
    <div className='Device'>
        <div>
            <div className='devbox1'>
                <p>{props.device.name}</p>
                <button>More</button>
            </div>
            <div className='devbox2'>
                <p>ID: {props.device._id}</p>
                <p>Info</p>
                <p>power: {props.device.power}</p>
                <p>power daily: {props.device.powerDaily}</p>
            </div>
        </div>
    </div>
  );
}

export default Device;
