import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const noNamed = [
    {description:'Our lawyers are fearless and aggressive in the pursuit of protecting their respective clients’ rights and interests. We are experienced and committed litigators who take your legal concerns by the horns and forge ahead towards obtaining good results.'},
    {name: "Emergency Consultation" , link: "/emergency"},
    {name: "Legal Litigation helps Lawyers and Clients to connect with each other and manage their matters on the cloud" , link: "/home"},
    {name: "Appoinment for a lawer" , link: "/personal-appointment"},
    {name: "Crime Investigation" , link: "/crime-investigation"},
    {name: "Consultancy" , link: "/consultancy"},
]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const company = [
        {name: "About Us" , link: "/aboutUs"},
        {name: "Careers" , link: "/careers"},
        {name: "Leadership" , link: "/leadership"},
        {name: "Refund Policy" , link: "/refund-policy"},
        {name: "Terms & Conditions" , link: "/conditions"},
        {name: "Contact Us" , link: "/contact-us"},
        {name: "Disclaimer" , link: "/disclaimer"}
    ]
    const services = [
        {name: "Client Management" , link: "/client"},
        {name: "Case Management" , link: "/checkup"},
        {name: "Client Connect" , link: "/connect"},
        {name: "Find A Lawer" , link: "/lawer"},
        {name: "Document" , link: "/document"},
        {name: "Legal Papers" , link: "/papers"},
        {name: "Consultancy" , link: "/consultancy"}
    ]
const Footer = () => {
    return (
        <footer className="footer-area clear-both">
        <div className="container pt-5">
            <div className="row py-5">
                <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                <FooterCol key={3} menuTitle="Company" menuItems={company}/>
                <FooterCol key={4} menuTitle="Office Address" menuItems={ourAddress}> 
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                        <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                        <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                    </ul>
                    <div className="mt-5">
                        <h6>Get us on</h6>
                        <button className="btn btn-primary">+65-25550295</button>
                    </div>
                </FooterCol>
            </div>
            <div className="copyRight text-center">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;