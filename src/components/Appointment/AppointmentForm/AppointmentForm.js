import React from 'react';

import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')
const AppointmentForm = ({modalIsOpen,closeModal,appointmentOn,date }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date=date;
        data.created = new Date();
       fetch("https://stormy-gorge-52541.herokuapp.com/addAppointment",{
           method:'POST',
           headers:{'content-type':'application/json'},
           body: JSON.stringify(data)
    })
    .then(res =>res.json())
    .then(success=>{
        if(success){
            closeModal();
            alert('Appointment created successfully');
        }
    })
        
    };
    return (
        <div>
            
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
                 <h2 className='text-primary text-center'>{appointmentOn}</h2>
                 <p className='text-center text-secondary'>On {date.toDateString()}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                <div className="form-group">
                <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                        </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand text-white">Send</button>
                    </div>
                    </form>
        </Modal> 
        </div>
    );
};

export default AppointmentForm;