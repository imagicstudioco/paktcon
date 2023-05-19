import React from 'react';

import  './style.css';
import  './bootstrap.min.css';
import { Link } from "react-router-dom";
import { FaMapMarker } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';




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

    <section className="contact-info padding-top-80 padding-bottom-80">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <h3 className="font-alegreya margin-top-30">Contact Us</h3>
                      </div>
                      <div className="col-md-8">
                        <ul className="row">
                          <li className="col-sm-4"> <FaMapMarker />
                            <h4 className="font-alegreya">Visit Us</h4>
                            <p>142 TRAFALGAR STREET, UNITED KINGDOM, GILLINGHAM, ME7 4RP</p>
                          </li>
                          <li className="col-sm-4"> <FaClock />
                            <h4 className="font-alegreya">Working Hours</h4>
                            <p>Mon - Fri : 9:00 AM - 9:00 PM</p>
                            <p>Sat : 9:00 AM - 2:00 PM</p>
                          </li>
                          <li className="col-sm-4"> <FaPhone />
                            <h4 className="font-alegreya">Call Us</h4>
                            <p>(+44)1234567890</p>
                           
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
    

      
       
        </>

     );

    };




export default Contact;