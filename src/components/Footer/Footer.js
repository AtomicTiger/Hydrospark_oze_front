import './Footer.css';
import BubbleContainer from '../BubbleContainer/BubbleContainer';

function Footer(props) {

  return (
    <div className='Footer'>
          <BubbleContainer color={props.color}></BubbleContainer>
        <div className='Marker'>
            © HydroSpark Team
        </div>
    </div>
  );
}

export default Footer;