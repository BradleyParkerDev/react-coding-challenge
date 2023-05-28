import '../App.css';
import star from './star.png'

const Star = (props) => {
    return(
        <div className='stars'>
            <img id="star-image" src={star}></img>
        </div>                
    );
}

export default Star;
