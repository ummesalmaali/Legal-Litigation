import React from 'react';
import AppImg from '../../../images/app4.jpg'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

const AppointmentHeader = ({handleDateChange}) => {
   
    return (
        <main style={{height:'600px',backgroundColor:'lightgray'}}  className='row d-flex align-items-center w-100'>
            <div className="col-md-4 offset-md-1 mt-5">
              <h1 style={{color:'#3A4256'}}>Get your Appointment</h1>
              <Calendar
                onChange={handleDateChange}
                value={new Date()}
            />
            </div>
            <div className="col-md-6 mt-5">
                <img src={AppImg} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default AppointmentHeader;