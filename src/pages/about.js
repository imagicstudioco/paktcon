import React from 'react';

import  Img from '../images/abt1.jpg';
import  './style.css';
import  './bootstrap.min.css';
import { Link } from "react-router-dom";



const About = () => {

    return (

        <>
     
        

    <div className="breadcrumb-area">
        <div className="overlay overlay-bg"></div>
        <div className="container">
            <div className="breadcrumb-content">
                <h2>About Pakt Consulting Ltd</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className="active">About us</li>
                </ul>
            </div>
        </div>
    </div>
     <div className="main-sec"></div>
 
    <div className="container">
        <div className="row">
            <div className="col-md-6 mt-20">
                <h2>About us</h2>
                <p>PAKT Consulting Limited is a leading cyber security firm based in the United Kingdom. Founded on April 11, 2017, we have been providing comprehensive security solutions to businesses of all sizes. </p>
                <p>Our team of experts is dedicated to helping our clients protect their valuable data and assets from cyber threats. We understand the importance of staying ahead of the latest security trends and use cutting-edge technology to provide our clients with the best possible protection. </p>
                <p>Our services include penetration testing, vulnerability assessments, incident response, compliance consulting and more. With our help, businesses can rest easy knowing that their sensitive information is safe and secure. </p>
                 <p>Our goal is to help our clients achieve a higher level of security and peace of mind. With our expertise and cutting-edge technology, we are committed to keeping our clients safe in today's ever-changing cyber landscape.</p>
                <p>Contact us today to learn how we can help protect your company from cyber attacks. </p>
            </div>
            <div className="col-md-6">
                <img src={Img} alt="" />
            </div>
        </div>
    </div>


       
        </>

     );

    };




export default About;