import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';


const Sidebar = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const[isLawer,setIsLawer] = useState(false);

    useEffect(()=>{
       fetch('https://stormy-gorge-52541.herokuapp.com/isLawer',{
           method:'POST',
           headers:{'content-type':'application/json'},
           body: JSON.stringify({email: loggedInUser.email})
       })
       .then(res => res.json())
       .then(data => setIsLawer(data));
    },[])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
             {isLawer && <div>
                <li>
                    <Link to="/allClients" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span> 
                    </Link>
                </li>
               <li>
                    <Link to="/clients" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Clients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addLawer" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Consultation</span>
                    </Link>
                </li>
                <li>
                    <Link to="/lawer/setting" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
               </div>}
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;