import React from 'react';
import './Services.css'
import serviceImg2 from '../../../images/service2.jpg'
import serviceImg1 from '../../../images/service1.jpg'
import serviceImg3 from '../../../images/service3.jpg'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name:'When to Hire a Lawyer',
        img:serviceImg2,
        description:'Over the course of your life, you’ll be faced with numerous challenges, milestones, and even setbacks. When you are facing some of these events, including real estate matters, starting a business, going through a divorce, navigating a lawsuit, or dealing with the aftermath of a costly accident, you will want to consider consulting with a legal professional. While it’s often thought that lawyers are overtly expensive, the truth is that a qualified legal professional can help you save and even make money in the long term'
    },
    {
        name:'How to choose the Right Lawer',
        img:serviceImg1,
        description:'High quality legal representation offers continuing care ensuring that you receive the following benefits and more. As you read along this list, consider your specific situation. Could having a lawyer in Adelaide on your side greatly increase your position?  Could you benefit from a better outcome?  Could knowing your legal rights be of benefit?'
    },
    {
        name:'Eligibility for no-fault Divorce',
        img:serviceImg3,
        description:'When you are equipped with a legal professional’s expertise, you can ensure that you’re getting the best possible outcome. Whether  that outcome is through a settlement or going forward with a trial, getting the best results is what lawyers are for. We can help you navigate through some of the toughest legal circumstances to ensure that you get the most favorable results possible'
    },
]

const Services = () => {
    return (
       <section className='services-container'>
           <div className='text-center mt-5'>
           <h5 style={{color:'#1CC7C1'}}>Our Services</h5>
           <h2 className='mb-5'>Providing solutions for your future</h2>
           </div>
           <div className='d-flex justify-content-center'>
               <div className='w-75 row'>
                {
                serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
               </div>
           </div>
       </section>
    );
};

export default Services;