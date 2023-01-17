import React from 'react';

import  Img from '../images/abt1.jpg';
import  './style.css';
import  './bootstrap.min.css';
import { Link } from "react-router-dom";



const Services = () => {

    return (

        <>
        
    <div className="breadcrumb-area">
        <div className="overlay overlay-bg"></div>
        <div className="container">
            <div className="breadcrumb-content">
                <h2>Our Services</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className="active">Our Services</li>
                </ul>
            </div>
        </div>
    </div>
     <div className="main-sec"></div>
 
    <div className="container">
        <div className="row">
            <div className="col-md-6 mt-20">
                <h2>Our Services</h2>
                <p>PAKT Consulting Limited offer a wide range of services to help businesses</p>

<h3>Network Security</h3>
<p>PAKT Consulting Limited network security services include a wide range of solutions to help protect your organization's networks and infrastructure from cyber threats. We offer firewall configuration and management, intrusion detection and prevention, virtual private network (VPN) implementation, and network segmentation. These solutions work together to safeguard your organization's sensitive information and keep your networks secure.</p>

<p>We also offer advanced threat detection and response services that can quickly identify and respond to cyber threats in real-time. Our security experts use the latest tools and techniques to detect and respond to network-based attacks, including advanced persistent threats (APTs) and other sophisticated cyber attacks.</p>

<p>In addition, we provide security assessments and penetration testing services that can help identify vulnerabilities in your networks and systems, allowing you to take proactive measures to remediate them before they can be exploited by malicious actors.</p>

<p>Whether you're a small business or a large enterprise, PAKT Consulting Limited has the expertise and experience to help you secure your networks and protect your digital assets from cyber threats.</p>



<h3>Data Loss Prevention</h3>

<p>Data Loss Prevention (DLP) is a service offered by PAKT Consulting Limited that helps organizations protect sensitive information from unauthorized access, use, disclosure, disruption, modification, or destruction. </p>

<p>DLP uses a combination of technology, policies, and procedures to identify, classify, and protect data, as well as to detect and respond to data breaches. 
Our DLP solution can monitor and control access to data across various channels, such as email, cloud storage, and USB drives.It can also prevent data exfiltration and unauthorized data sharing. </p>

<p>Our DLP service can be customized to fit the specific needs of your organization and to comply with industry regulations such as GDPR. </p>

<p>With PAKT Consulting's DLP service, you can ensure the security and compliance of your sensitive information.</p>


<h3>Antivirus and Malware Protection, Hacking</h3>

<p>PAKT Consulting Limited provides antivirus and malware protection. Our antivirus and malware protection services include real-time scanning of all incoming and outgoing data, as well as regular updates to our virus definitions to ensure maximum protection against the latest threats. </p>

<p>These help identify vulnerabilities in your systems and networks and provide you with the information you need to fix them before they can be exploited by malicious actors. </p>

<p>Whether you're a small business or a large enterprise, PAKT Consulting Limited has the expertise and experience to help you secure your digital assets and protect your data from cyber threats.</p>


<h3>Cyber-analytics and Risk Intelligence </h3>

<p>At PAKT Consulting Limited we provide cyber-analytics and risk intelligence as a service. </p>

<p>Our cyber-analytics services include advanced data analysis and visualization techniques that can help identify patterns, trends, and anomalies in your network traffic, user behavior, and other data sources. </p>

<p>This information can be used to detect and respond to cyber threats in real-time, as well as to improve your overall security posture. </p>

<p>Our risk intelligence services provide you with actionable and relevant threat intelligence that can help you understand the latest cyber threats facing your organization, and how to defend against them. 
Whether you're looking to improve your incident response capabilities, or simply want to stay ahead of the latest cyber threats, PAKT Consulting Limited has the expertise and experience to help you succeed.</p>

<h3>Mobile Security</h3>
<p>PAKT Consulting Limited's mobile security services are designed to protect your organization's mobile devices and data from cyber threats. We offer a range of solutions including mobile device management (MDM), mobile threat defense (MTD), mobile application management (MAM) and mobile identity management (MIM).</p>

<p>Our MDM solutions allow you to manage, secure and monitor your mobile devices, including smartphones and tablets, from a single console. Our MTD solutions protect your mobile devices from malware, phishing, and other mobile-specific threats. Our MAM solutions secure and manage access to mobile apps, allowing you to control which apps can be used, and by whom. Our MIM solutions secure and manage mobile identities, ensuring that only authorized users can access sensitive data.</p>

<p>We also offer mobile security assessments and penetration testing services that can help identify vulnerabilities in your mobile environment, allowing you to take proactive measures to remediate them before they can be exploited by malicious actors.</p>

<p>No matter the size of organization, PAKT Consulting Limited has the expertise and experience to help you secure your mobile devices and protect your digital assets from cyber threats.</p>

              


            </div>
            <div className="col-md-6">
                <img src={Img} alt="" />
            </div>
        </div>
    </div>


       
        </>

     );

    };




export default Services;