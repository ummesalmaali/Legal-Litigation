import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className='col-md-4 text-center'>
            <img style={{height:'150px'}} src={service.img} alt=""/>
            <h5 className='mt-5'>{service.name}</h5>
            <p className='text-secondary'>{service.description}</p>
            

        </div>
    );
};

export default ServiceDetail;