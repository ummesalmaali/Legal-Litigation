import React, { useState } from 'react';
import FeaturedService from '../../Home/FeaturedService/FeaturedService';
import Header from '../../Home/Header/Header';
import HeaderMain from '../../Home/HeaderMain/HeaderMain';
import Lawers from '../../Home/Lawers/Lawers';
import LawInfo from '../../Home/LawInfo/LawInfo';
import Testimonials from '../../Home/Testimonials/Testimonials';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());
    const handleDateChange = date =>{
       setSelectedDate(date);
    }
    return (
        <div>
           <NavBar></NavBar>
           <HeaderMain></HeaderMain>
           <LawInfo></LawInfo>
           <FeaturedService></FeaturedService>
           <Testimonials></Testimonials>
           <Lawers></Lawers>
           <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
           <BookAppointment date={selectedDate}></BookAppointment>
           <Footer></Footer>
        </div>
    );
};

export default Appointment;