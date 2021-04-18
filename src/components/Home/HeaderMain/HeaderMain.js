import React from 'react';
import lawerImg from '../../../images/lawerMain.jpg'

const HeaderMain = () => {
    
    return (
        <main style={{height:'600px',backgroundColor:'lightgray'}}  className='row d-flex align-items-center w-100'>
            <div className="col-md-4 col-sm-6 col-12 offset-md-1 mt-5">
              <h1>Where you Find The Best <br/> Law Professionals</h1>
              <p>We provide legal advice by thoroughly investigating your matters. You need to draft up legal documents that are necessary for the person or organization. A legal consultant offers any relevant legal advice to their clients and ensures that their clients are in right standing with the law.</p>
             <button className="btn btn-primary">Get Legal Help</button>
            </div>
            <div className="col-md-6 col-sm-6 col-12 ">
                <img src={lawerImg} alt="" className="img-fluid mb-5"/>
            </div>
        </main>
    );
};

export default HeaderMain;