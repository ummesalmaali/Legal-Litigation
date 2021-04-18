import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faGavel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const infosData = [
    {
        title:'Business Formation',
        description1:'Limited Liability Company(LLC)',
        description2:'Federal Courts & The Public',
        description3:'The Judicial Conference',
        icon:faGavel,
        background:'primary'
    },
    {
        title:'Business Information',
        description1:'Corporate dissolution',
        description2:'Operating agreement',
        description3:'Workplace Conduct',
        
        icon:faGavel,
        background:'dark'
    },
    {
        title:'Intellectual Property',
        description1:'Trademark registration',
        description2:'Provisional patent',
        icon:faGavel,
        background:'primary'
    },
]
const LawInfo = () => {
    return (
        <section className='w-100' >
            <h1 className='text-center text-secondary mt-5 mb-5'>Consultancy Info</h1>
        
           <div className='d-flex justify-content-center'>
           <div className='w-75 row'>
           {
                infosData.map(info=> <InfoCard info={info}></InfoCard>)
            }
           </div>
           </div>
           
        </section>
    );
};

export default LawInfo;