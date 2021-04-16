import React, { useState } from 'react';
import AppointmentForm from '../../AppointmentForm/AppointmentForm';


const BookingCard = ({booking,date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="col-md-4 mt-5 mb-5 ">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h6 className="card-title text-brand">
                        {booking.subject}
                    </h6>
                    <p>{booking.visitingHour}</p>
                    <p>{booking.totalSpace} Reservation Available</p>
                    <button onClick={openModal} className='btn btn-brand text-white'>Get Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} date={date} appointmentOn={booking.subject}></AppointmentForm>
                
                </div>
            </div>
        </div>
    );
};

export default BookingCard;