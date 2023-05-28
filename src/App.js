import './App.css';
import Star from './Components/Star';
import { useState, useEffect } from 'react';

function App(props) {
  
  //Count initial state is 0
  const [count,setCount] = useState(0);
  const [starsArr, setStarsArr] = useState([])

  //Add one to count
  const add = () => {
    
    if(count < 5){
        setCount(count + 1);
    }
  }

  //Remove one from count
  const remove = () => {  
    if(count <= 5 && count > 0){
        setCount(count - 1);
    }
  }

  //useEffect watches count to shorten or lengthen starsArr
  useEffect((props)=>{
    console.log(`Count is: ${count}`)
    switch(count){
      case 0:
        setStarsArr([]);
        break;     
      case 1:
        setStarsArr([1]);
        break;
      case 2:
        setStarsArr([1,2]);
        break;
      case 3:
        setStarsArr([1,2,3]);
        break;
      case 4:
        setStarsArr([1,2,3,4]);
        break;
      case 5:
        setStarsArr([1,2,3,4,5]);
        break;          
    }
  },[count])
  
  return (
    <div id="outer-container">
      <div id="inner-container">
        <div className="inner-divs" style={{backgroundColor: "red", justifyContent: "space-evenly"}}>
          <p style={{fontWeight: "bold", marginRight: "60%", marginTop: "10%"}}>LOGO</p>
          <p style={{marginTop: "10%"}}>menu</p>
        </div>
        <div className="inner-divs" style={{justifyContent: "space-evenly"}}>
          <button 
          className="buttons"
          onClick ={remove}
          >
              Remove 1
          </button>
          <h3>{count}</h3>
          <button 
          className="buttons"
          onClick={add}
          >
            Add 1
          </button>
        </div>
        <div className="inner-divs">
          {
            starsArr.map( star =>(<Star/>))
          }
        </div>
      </div>
    </div>
  );
}

export default App;

