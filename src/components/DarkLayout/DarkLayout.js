import { Outlet } from "react-router-dom";
import BubbleContainer from "../BubbleContainer/BubbleContainer";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './DarkLayout.css';

function DarkLayout(){
    return(
        <div id="DarkLayout">
            <Navbar login={true}></Navbar>
            <Outlet></Outlet>
            <BubbleContainer color={"rgba(255, 255, 255, 0.2)"}></BubbleContainer>
            <Footer></Footer>
        </div>
    )
}
export default DarkLayout;