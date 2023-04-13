import './BurgerMenu.css';
import React, { useState } from 'react';

function BurgerMenu() {
    const [BurgerClass, setBurerClass] = useState([false, "bar1", "bar2", "bar3"])

    const BurgerClicked = () =>{
        console.log('nice')
        if(BurgerClass[0] === false){
            setBurerClass([true, "bar1-2", "bar2-2", "bar3-2"])
        }else{
            setBurerClass([false, "bar1", "bar2", "bar3"])
        }

    }
  return (
    <div id='BurgerMenu' onClick={BurgerClicked}>
        <div className={BurgerClass[1]}></div>
        <div className={BurgerClass[2]}></div>
        <div className={BurgerClass[3]}></div>
    </div>
  );
}

export default BurgerMenu;