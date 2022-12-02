import { Link } from 'react-router-dom';
import landing from '../img/landing.jpg'
import './Landing.css'
function Landing() {
    return (
        <div className='landing-container'>
            <div className='landing-content'>
            <img
                            className="landing-image"
                            src={landing}
                            alt='Background'
                        />
            <h2 className='landing-content'>Aguante BreakingBad</h2>
            <Link className='landing-content' to='/characters'>
                <button className='landing-content'>WELCOME</button>
            </Link>
        </div>
            </div>
            
    );
};

export default Landing;