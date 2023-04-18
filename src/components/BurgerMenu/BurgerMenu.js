import './BurgerMenu.css';
import React, { useState, useEffect } from 'react';

function BurgerMenu() {
    const [BurgerClass, setBurerClass] = useState([false, "bar1-start", "bar2-start", "bar3-start"])

    const BurgerClicked = () =>{
      console.log('nice')
      if(BurgerClass[0] === false){
        setBurerClass([true, "bar1-2", "bar2-2", "bar3-2"])
      }else{
        setBurerClass([false, "bar1", "bar2", "bar3"])
      }
    }


  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 600){
        console.error("Bombek menu update")
        setBurerClass([false, "bar1-start", "bar2-start", "bar3-start"])
      }
    };

  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
  }, []);
    

  return (
    <div id='BurgerMenu' onClick={BurgerClicked}>
        <div className={BurgerClass[1]}></div>
        <div className={BurgerClass[2]}></div>
        <div className={BurgerClass[3]}></div>
    </div>
  );
}

export default BurgerMenu;