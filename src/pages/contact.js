import React from 'react';

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

    <section className="section-padding bg-theme-primary">
        <div className="container">
            <div className="section-header-style-2">
                <h6 className="text-light-green sub-title">Contact Form</h6>
                <h3 className="text-light-black header-title">Get In Touch</h3>
            </div>
            <div className="row">
                <div className="col-12">
                    <form className="form_validate ajax_submit form_alert" action="sendmail.php" method="post" enctype="multipart/form-data">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="text-light-black fw-600">Full Name</label>
                                    <input type="text" name="name" className="form-control form-control-submit" placeholder="Full Name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="text-light-black fw-600">Email I'd</label>
                                    <input type="email" name="email" className="form-control form-control-submit" placeholder="Email I'd" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="text-light-black fw-600">Phone No.</label>
                                    <input type="text" name="phone" className="form-control form-control-submit" placeholder="Phone No." />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="text-light-black fw-600">Subject</label>
                                    <input type="text" name="subject" className="form-control form-control-submit" placeholder="Subject" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="text-light-black fw-600">Message</label>
                                    <textarea className="form-control form-control-submit" name="message" rows="6" placeholder="Write Message"></textarea>
                                </div>
                                <button type="submit" className="btn-second btn-submit full-width">Submit</button>
                                <div className="server_response w-100"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    

      
       
        </>

     );

    };




export default Contact;