import React from 'react';
import advocate from '../../../images/Elise.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Lawer = () => {
    return (
        <div className="col-md-4 text-center">
        <img className="img-fluid mb-3" src={advocate} alt=""/>
        <h4>Ad. Elise Smith</h4>
        <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +65-188-934789</p>
    </div>
    );
};

export default Lawer;