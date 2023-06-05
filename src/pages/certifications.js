import React from 'react';

import  Img from '../images/certification-1.jpg';
import  './style.css';
import  './bootstrap.min.css';
import { Link } from "react-router-dom";


const Certifications = () => {

    return (

        <>
     

    <div className="breadcrumb-area">
        <div className="overlay overlay-bg"></div>
        <div className="container">
            <div className="breadcrumb-content">
                <h2>Our Certifications</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className="active">Our Certifications</li>
                </ul>
            </div>
        </div>
    </div>
     <div className="main-sec"></div>
 
    <div className="container">
        <div className="row">
            <div className="col-md-6 mt-20">
                <h2>Our Certifications</h2>
                <p>At PAKT Consulting, we take pride in our commitment to excellence and our dedication to providing top-notch cybersecurity services to our clients. Our team of highly skilled professionals is equipped with the knowledge and expertise necessary to deliver comprehensive solutions that safeguard businesses against evolving cyber threats. We understand the importance of certifications in demonstrating our competence and proficiency in the field of cybersecurity. Here are some of the certifications held by our team members:</p>

<ol>
<li>Certified Information Systems Security Professional (CISSP): Our experts possess the CISSP certification, which validates their expertise in designing, implementing, and managing secure information systems. This globally recognized certification demonstrates our commitment to upholding the highest standards of cybersecurity practices.</li><br />
<li>Certified Ethical Hacker (CEH): Our team includes Certified Ethical Hackers who have undergone rigorous training to identify vulnerabilities in computer systems and networks. With this certification, we possess the skills to assess the security posture of our clients' infrastructures and provide effective recommendations for improvement.</li><br />
<li>Certified Information Security Manager (CISM): Our professionals have achieved the CISM certification, which demonstrates their proficiency in managing and overseeing information security programs within organizations. This certification enables us to develop robust security strategies tailored to our clients' specific needs.</li><br />
<li>Certified Cloud Security Professional (CCSP): As organizations increasingly embrace cloud computing, our team members with CCSP certification possess the knowledge and expertise to ensure the security of cloud environments. We understand the unique challenges associated with cloud security and offer tailored solutions to protect our clients' data and applications.</li><br />
<li>CompTIA Security+: Our team includes professionals with the CompTIA Security+ certification, a widely recognized credential that validates their fundamental knowledge of network security concepts and practices. This certification ensures that our team members are well-versed in the essential principles of cybersecurity.</li><br />
<li>Certified Information Privacy Professional (CIPP): We have experts who hold the CIPP certification, demonstrating their understanding of global privacy laws and regulations. This certification allows us to provide guidance on privacy compliance and develop strategies to protect sensitive data.</li>
</ol>

<p>These certifications exemplify our commitment to continuous learning and staying up-to-date with the latest advancements in the cybersecurity field. By maintaining these credentials, we ensure that our clients receive the highest quality of service and benefit from the most current cybersecurity practices.</p>
<p>Please note that this list represents a sample of the certifications held by our team members at PAKT Consulting. We are constantly pursuing additional certifications and training to expand our knowledge and expertise in the ever-evolving landscape of cybersecurity.</p>
<p>Contact us today to learn more about how our certified professionals can help safeguard your business against cyber threats.</p>
                </div>
            <div className="col-md-6">
                <img src={Img} alt="" />
            </div>
        </div>
    </div>


       
        </>

     );

    };




export default Certifications;