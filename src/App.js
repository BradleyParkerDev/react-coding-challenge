import './App.css';
import Star from './Components/Star';
import { useState } from 'react';

function App(props) {
  
  //Count initial state is 0
  const [count,setCount] = useState(0);

  //Add one to count
  const add = () => {
    
    if(count < 5){
        setCount(count + 1);
        console.log(count)
    }
  }

  //Remove one from count
  const remove = () => {  
    if(count <= 5 && count > 0){
        setCount(count - 1);
        console.log(count)
    }
  }


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
          <Star count = {props.count} />
        </div>
      </div>
    </div>
  );
}

export default App;

