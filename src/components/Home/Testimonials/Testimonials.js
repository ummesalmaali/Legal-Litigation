import React from 'react';
import './Testimonials.css'
import Elise from '../../../images/Elise.jpg'
import Jacob from '../../../images/chasmishlawers.jfif'
import Wilson from '../../../images/lawerMan3jpg.jpg'
import Testimonial from '../Testimonial/Testimonial';


const testimonialData = [
    {
        quote:'Client intake and counseling (with regard to pending litigation)',
        name:'Elise Hawckerd',
        from:'Chicago',
        img:Elise
    },
    {
        quote:'Prosecution and defense of criminal suspects',
        name:'Jacob John',
        from:'Oklahoma',
        img:Jacob
    },
    {
        quote:'Advocacy (written and oral) in administrative hearings',
        name:'Wilson Smith',
        from:'New York',
        img:Wilson
    },
]
const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
        <div className="container">
            <div className="section-header">
                <h5 className="text-primary">TESTIMONIAL</h5>
                <h1>What Our Clients <br/> Say </h1>
            </div>
            <div className="card-deck mt-5">
                 {
                     testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                 }
             </div>
        </div>
    </section>
    );
};

export default Testimonials;