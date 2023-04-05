
function BubbleContainer() {

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
function Dombek(i){
  i =(i-35)*0.1;
  return   (i*i) ;
}
const BoubbleArray = [];
for(let i =0; i<70;i++){
  let left = getRandomInt((-150 + i*22), (100 +i*22));
  let top = getRandomInt(650, 750);
  let size = getRandomInt((Dombek(i)+50), Dombek(i)+130)
  BoubbleArray.push({left: left, top:top, size: size});
}

  return (
    <div className='Bubbles'>
        <div>
          {BoubbleArray.map(function(object, i) {return <div style={{backgroundColor:"rgba(0,0,255,0.5)", borderRadius:"100%", position:"fixed", left:object.left, top:object.top, width:object.size, height:object.size}} key={i}></div>;
          })}
        </div>
    </div>
  );
}

export default BubbleContainer;