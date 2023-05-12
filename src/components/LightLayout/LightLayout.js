import { Outlet } from "react-router-dom";
import BubbleContainer from "../BubbleContainer/BubbleContainer";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './LightLayout.css';

function LightLayout(){
    return(
        <div id="LightLayout">
            <Navbar login={true}></Navbar>
            <Outlet></Outlet>
            <BubbleContainer color={"rgba(255, 255, 255, 0.2)"}></BubbleContainer>
            <Footer></Footer>
        </div>
    )
}
export default LightLayout;