import './BubbleContainer.css';

function BubbleContainer(props) {

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
function Dombek(i){
  i =(i-6)*1.4;
  return   (i*i) ;
}
const BubbleArray = [];
//Bottom line of boubbles
for(let i =0; i<15;i++){
  let left = getRandomInt((-100 + i*140), (-70 +i*140));
  let bottom = getRandomInt((Dombek(i)*0.5)-90,(Dombek(i)*0.5)+ -55);
  let size = getRandomInt((Dombek(i)+140), Dombek(i)+150)
  BubbleArray.push({left: left, bottom:bottom, size: size});
}
//top line of boubbles
for(let i =0; i<15;i++){
  let left = getRandomInt((20 + i*140), (120 +i*140));
  let bottom = getRandomInt((Dombek(i)*0.8) -10,(Dombek(i)*0.8)+ 60);
  let size = getRandomInt((Dombek(i)*0.5)+50,(Dombek(i)*0.5)+100)
  BubbleArray.push({left: left, bottom:bottom, size: size});
}

  return (
    <div className='Bubbles'>
        <div>
          { /* blue color bubbles ="rgba(189, 227, 255, 0.5)"*/}
          { /* white color bubbles ="rgba(255, 255, 255, 0.2)"*/}
          {BubbleArray.map(function(object, i) {return <div style={{ backgroundColor:props.color, borderRadius:"100%", position:"absolute", left:object.left, bottom:object.bottom, width:object.size, height:object.size, zIndex:0}} key={i}></div>;})}
        </div>
    </div>
  );
}

export default BubbleContainer;