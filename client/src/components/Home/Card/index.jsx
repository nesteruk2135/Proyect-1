import React from 'react';

function Card({name, image, nickName}) {
    return(
        <div className='cardi'>
             <div className ="row">
            <h3  className="card-title">{name}</h3>
            <h5 className="card-text">{nickName}</h5>
            <img className="card-img-top" src={image} alt="no hay" width='200px' height='250px'></img>
        </div>
        </div>
       
    );
};

export default Card;