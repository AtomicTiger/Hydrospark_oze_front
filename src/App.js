import './App.css';
import BubbleContainer from './components/BubbleContainer/BubbleContainer';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BubbleContainer></BubbleContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
