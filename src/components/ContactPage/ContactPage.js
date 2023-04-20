import BubbleContainer from '../BubbleContainer/BubbleContainer';
import './ContactPage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function ContactPage() {
  return (
    <div className='ContactPage'>
      <Navbar login={false}></Navbar>
      <div className='content'>
        Contact
      </div>
      <BubbleContainer color={"rgba(189, 227, 255, 0.5)"}></BubbleContainer>
      <Footer></Footer>
    </div>
  );
}

export default ContactPage;