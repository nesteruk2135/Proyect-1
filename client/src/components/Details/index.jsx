import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Link } from "react-router-dom";
import { getDetails } from "../../actions/index.jsx";
import "./details.css"
import dt from "../img/dt.jpg"
function Details(props) {
    const [loading, setLoading] = useState(false)
    const details = useSelector(i => i.details);
    const dispatch = useDispatch();
    const {id} = useParams()

    useEffect(() => {
        dispatch(getDetails(id))
            setLoading(true)
    }, [id, dispatch]);

    return (
        <div className="detail-container">
             <img  className="details-image"
                            src={dt}
                            alt='Background'
            />
            {loading? 
            <div >
            <h2 className="details-title">{details.name}</h2>
            <div className="details-content">
                <img className="details-img" src={details.image} alt="Not found"></img>
                <h5 className="details-idName">{details.nickName}</h5>
                <h3 className="details-info">status</h3>
                <h4 className="details-info">{details.status}</h4>
                <h4 className="details-info">{details.birthday}</h4>
                <h4 className="details-info">Occupations</h4>
                {details.occupation?.map(i => (
                    <h5>{i}</h5>
                ))}
            </div>
        </div> : 
        <div>Loading</div>
        } 
         <Link className="btn-navigate" to={'/characters'}>
            <button>back to home</button>
         </Link>
        </div>
    )
};

export default Details;