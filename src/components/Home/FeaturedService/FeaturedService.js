import React from 'react';
import allLawer from '../../../images/AllLawer.png'

const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className='text-center mt-5 text-primary'>
            <h1>Our Team</h1>
            </div>
        <div className="container mb-5">
            <div className="row mb-5">
                <div className="col-md-5 mb-4 m-md-0">
                    <img className="img-fluid" src={allLawer} alt=""/>
                </div>
                <div className="col-md-7 align-self-center">
                    <h1>We dedicate ourselves to being more than legal representatives.</h1>
                    <p className="text-secondary my-5">
                    Gino Hardial Singh, Criminal lawyer, a Barrister of the Middle Temple, is the founder of Abbots Chambers LLC. His forte is the practice of Criminal Law and civil dispute resolution. The practice of criminal law requires commitment and the devil is in the details. He is an experienced and dedicated criminal trial lawyer who focuses his litigation practice on white collar crime involving offences under the Corruption, Drug Trafficking and Other Serious Crimes (Confiscation of Benefits) Act, the Prevention of Corruption Act, Organized Crime, Criminal Breach of Trust, Fraud, Forgery as well as Cheating offences. He is also adept in handling matters involving Murder, Drug Trafficking, Robbery, Rape, Sexual Assault, Rioting and offences against Public Servants. Prior to becoming an Advocate & Solicitor in Singapore in the year 2000, he had a 3-and-a-half-year stint in the Police Force.

                    In the past 7 years, he has managed to obtain 154 acquittals (pre-trial and post-trial) and discharges for clients accused of committing various kinds of criminal offences including those under the Corruption, Drug Trafficking and Other Serious Crimes (Confiscation of Benefits) Act, Rape, offences against Public Servants, Robbery, outrage of modesty etcetera. This includes warnings in lieu of prosecution and no further actions at the criminal investigations stage.

                    To get in touch with Gino, please call +65 9777 7775 or email gino@abbotschambers.com now
                    </p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default FeaturedService;