import './BurgerMenu.css';
import React, { useState, useEffect } from 'react';



function BurgerMenu(props) {
  const [BurgerClass, setBurerClass] = useState([false, "bar1-start", "bar2-start", "bar3-start"]);


  const BurgerClicked = () => {
    console.log('nice')
    if (BurgerClass[0] === false) {
      setBurerClass([true, "bar1-2", "bar2-2", "bar3-2"]);
      props.onBurgerChange(1)
    } else {
      setBurerClass([false, "bar1", "bar2", "bar3"]);
      props.onBurgerChange(2);
    }
  }


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) {
        setBurerClass([false, "bar1-start", "bar2-start", "bar3-start"]);
        props.onBurgerChange(0);
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