import React from 'react';
import advocate from '../../../images/Elise.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Lawer = ({lawer}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">
        {
            lawer.image ? <img style={{height:'200px'}} src={`data:image/png;base64,${lawer.image.img}`}/>
            :
            <img style={{height:'200px'}} className="img-fluid mb-3" src={`https://stormy-gorge-52541.herokuapp.com/${lawer.img}`} alt=""/>
        }
        <h4>{lawer.name}</h4>
        <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +65-188-934789</p>
    </div>
    );
};

export default Lawer;