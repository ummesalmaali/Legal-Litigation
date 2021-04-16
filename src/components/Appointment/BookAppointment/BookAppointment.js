import React from 'react';
import BookingCard from '../Appointment/BookingCard/BookingCard';

const bookingData = [
    {
        _id:'',
        id:1,
        subject:'Consultation for legal information and advice',
        visitingHour:'10:00 AM - 11.00 AM',
        totalSpace:15
    },
    {
        _id:'',
        id:2,
        subject:'Consultation to review documents such as agreements, leases, wills.',
        visitingHour:'10:00 AM - 11.00 AM',
        totalSpace:8
    },
    {
        _id:'',
        id:3,
        subject:'Mediation, arbitration, or other third party services',
        visitingHour:'10:00 AM - 11.00 AM',
        totalSpace:8
    },
    {
        _id:'',
        id:4,
        subject:'Preparation of documents',
        visitingHour:'10:00 AM - 11.00 AM', 
        totalSpace:9
    },
    {
        _id:'',
        id:5,
        subject:'Representing clients in court and legislative hearings',
        visitingHour:'10:00 AM - 11.00 AM',
        totalSpace:11
    },
    {
        _id:'',
        id:6,
        subject:'Representing clients in negotiations',
        visitingHour:'10:00 AM - 11.00 AM',
        totalSpace:12
    },
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 style={{color:'aquamarine'}} className='text-center mt-5 mb-5'>Available Appointments On {date.toDateString()} </h2>
              <div className="row w-100">
                {
                    bookingData.map(booking => <BookingCard booking={booking} key={booking.id} date={date} ></BookingCard> )
                }
              </div>
         </section>
    );
};

export default BookAppointment;