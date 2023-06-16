import React from 'react';
import  Img from '../images/contact.jpg';
import  './style.css';
import  './bootstrap.min.css';
import { Link } from "react-router-dom";




const Contact = () => {

    return (

        <>

    <div className="breadcrumb-area">
        <div className="overlay overlay-bg"></div>
        <div className="container">
            <div className="breadcrumb-content">
                <h2>Contact Us</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className="active">Contact us</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="main-sec"></div>

    <div className="container">
        <div className="row">
            <div className="col-md-6 mt-20">
                <h2>Contact Us</h2>

                <p>Thank you for your interest in PAKT Consulting. We are dedicated to providing top-notch cybersecurity solutions to businesses and organizations, helping them protect their valuable assets and sensitive information from evolving cyber threats.</p>

<p>If you have any questions, require further information, or would like to discuss how we can assist you in strengthening your cybersecurity posture, please feel free to reach out to us. We value your feedback, inquiries, and concerns, and we are here to assist you in any way we can.</p>

<p><h5>Contact Information:</h5></p>

<p><strong>General Inquiries:</strong><br />
For general inquiries or information about our services, please email us at info@paktconsulting.co.uk</p>

<p><strong>Sales Inquiries:</strong><br />
If you are interested in our cybersecurity solutions and would like to discuss your specific requirements or request a proposal, please email our sales team at sales@paktconsulting.co.uk</p>


<p>
<strong>Phone:</strong><br />
Main Line: +44 7549 329 901</p>

<p>We look forward to hearing from you and assisting you with your cybersecurity needs. At PAKT Consulting, your security is our priority.</p>
       
        </div>
        <div className="col-md-6">
                <img src={Img} alt="" />
            </div>
        </div>
    </div>
    

      
       
        </>

     );

    };




export default Contact;