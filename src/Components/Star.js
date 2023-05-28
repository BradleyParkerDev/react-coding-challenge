import '../App.css';
import star from './star.png'
import { useState, useEffect } from 'react';

const Star = (props) => {
    const { count } = props;
    
    const imgPath = "/Users/bparkerpro/Desktop/Code-Immersives-Workspace/300-workspace/301/react-coding-challenge/public/star.png"
    useEffect((props) =>{


        console.log(`Count: ${count}`)

    },[count])



    return(
        <div className='stars'>
            <img id="star-image" src={star}></img>
        </div>
    );
}

export default Star;
