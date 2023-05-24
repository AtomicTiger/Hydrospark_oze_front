import { Outlet, useLocation } from "react-router-dom";
import BubbleContainer from "../BubbleContainer/BubbleContainer";
import LoginContext from "./LoginContext";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './LightLayout.css';
import { useState, useEffect } from "react";

function LightLayout(){
    const [login, setLogin] = useState(true);
    const [id, setId] = useState();
    const location = useLocation();

    useEffect(() => {
        // Access the value from the URL or any other source in the location object
        const valueFromOutlet = location // Assuming the value is passed as state

        console.log(login)
        console.log(valueFromOutlet)

        if (valueFromOutlet) {
          if(valueFromOutlet.state)
          {
            if(valueFromOutlet.state != null)
            {

                console.log(id);
                // Update the login state with the value from the outlet
                setLogin(false);
                setId(valueFromOutlet.state.id)
            }
          }
        }

      }, [location]);
    

    return(
        <div id="LightLayout">
            <Navbar login={login} id={id}></Navbar>
            <Outlet></Outlet>
            <BubbleContainer color={"rgba(189, 227, 255, 0.5)"}></BubbleContainer>
            <Footer></Footer>
        </div>
    )
}
export default LightLayout;