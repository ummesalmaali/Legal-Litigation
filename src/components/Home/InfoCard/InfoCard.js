import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGavel } from '@fortawesome/free-solid-svg-icons';
import './InfoCard.css'
import serviceImg from '../../../images/Ethics-of-Virtual-Consultations.jpg'


const InfoCard = ({info}) => {
    return (
        <div className='col-md-4 info-card'>
            <div className={`d-flex justify-content-center info-container info-${info.background}`}>
            <div className='mr-3'>
                <FontAwesomeIcon className='info-icon' icon={faGavel}></FontAwesomeIcon>
            </div>
            <div>
            <h5>{info.title}</h5>
           <p>{info.description1}</p>
           <p>{info.description2}</p>
           <p>{info.description3}</p>
           <p>{info.description4}</p>
           <p>{info.description5}</p>
            </div>
            </div>
        </div>
    );
};

export default InfoCard;