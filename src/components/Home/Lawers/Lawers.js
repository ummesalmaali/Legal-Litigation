import React from 'react';
import Lawer from '../Lawer/Lawer';

const Lawers = () => {
    return (
        <section className="doctors">
        <div className="container">
            <h5 className="text-center  text-primary mb-5">Our Lawers</h5>
            <div className="row">
                <Lawer/>
                <Lawer/>
                <Lawer/>
            </div>
        </div>
    </section>
    );
};

export default Lawers;