import React, { useEffect, useState } from 'react';
import Lawer from '../Lawer/Lawer';

const Lawers = () => {
    const [lawers,setLawers] = useState([])
    useEffect(()=>{
     fetch("https://stormy-gorge-52541.herokuapp.com/lawers")
     .then(res =>res.json())
     .then(data => setLawers(data))
    },[])
    return (
        <section className="doctors">
        <div className="container">
            <h4 className="text-center  text-primary mb-5">Our Lawers</h4>
            <div className="row">
                {
                    lawers.map(lawer => <Lawer key={lawer._id} lawer={lawer}></Lawer>)
                }
            </div>
        </div>
    </section>
    );
};

export default Lawers;