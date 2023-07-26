import React from 'react';

import  Img from '../images/services-1.jpg';
import  './style.css';
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
                <h1>Our Services</h1>
                <p>PAKT  Consulting Limited offer a wide range of services to help businesses</p>

                <h2>Application Security Programme Creation & Review</h2>
                <p>Application Security Programme Creation & Review is a comprehensive process focused on enhancing the security posture of an organization's software applications. It involves the development, implementation, and continuous improvement of strategies, policies, and practices to protect applications from potential security threats and vulnerabilities.</p>

<p>The creation of an Application Security Programme typically follows these key steps:</p>
<ol>
<li>**Assessment and Analysis:** The first phase involves assessing the existing application landscape to identify potential security risks and vulnerabilities. This may include conducting security audits, penetration testing, and code reviews.</li>
<li>**Policy and Framework Development:** Based on the assessment, a set of security policies, guidelines, and best practices are developed. These policies cover various aspects, such as secure coding standards, access controls, data handling, authentication mechanisms, and incident response procedures.</li>
<li>**Training and Awareness:** Employees and developers are trained on the newly developed security policies and procedures. This helps raise awareness about the importance of application security and ensures that all team members are equipped to follow secure coding practices.</li>
<li>**Secure Development Lifecycle (SDL) Integration:** The Application Security Programme aims to integrate security into the software development lifecycle. This means implementing security measures at every stage of development, from design and coding to testing and deployment.</li>
<li>**Tools and Technology Implementation:** To support the development and review processes, organizations often deploy security tools like static code analysis, dynamic application security testing (DAST), and interactive application security testing (IAST) tools.</li>
<li>**Continuous Monitoring and Improvement:** Application security is an ongoing process. Regular reviews, monitoring, and assessments are essential to identify new threats and adapt security measures accordingly.</li>
<li>**Incident Response Planning:** The programme includes procedures for handling security incidents and breaches, ensuring that the organization can respond effectively and promptly to any security threats that may arise.</li>
</ol>

<p>The Review phase involves evaluating the effectiveness and efficiency of the established Application Security Programme:</p>
<ol>
<li>**Performance Evaluation:** The existing security measures are assessed to determine their effectiveness in protecting applications from potential threats. This includes reviewing incident response records and tracking security-related incidents.</li>
<li>**Compliance Check:** The programme's adherence to industry standards and regulatory requirements is assessed to ensure that the organization remains compliant with relevant security standards.</li>
<li>**Feedback and Improvement:** Feedback from stakeholders, developers, and security experts is collected to identify areas for improvement in the existing programme. Based on this feedback, the programme is updated and refined to address emerging threats and challenges.</li>
<li>**Risk Assessment:** A comprehensive risk assessment is conducted to identify any new vulnerabilities and threats that might have emerged since the last review.</li>
</ol>
<hr />
<h2>Enterprise Architecture Planning & Review</h2>
<p>Enterprise Architecture Planning & Review is a comprehensive and strategic service aimed at ensuring the alignment of an organization's IT infrastructure, processes, and technologies with its security objectives. It involves creating a structured and future-oriented blueprint for an organization's IT landscape to optimize efficiency, minimize risks, and enhance cybersecurity resilience.</p>
 <p>Key aspects of this service include:</p>             
<p><strong>Architecture Assessment:</strong> Experienced IT architects and security experts assess the existing IT infrastructure and security measures to identify vulnerabilities, weaknesses, and areas of improvement. This evaluation encompasses hardware, software, networks, databases, applications, and other critical components.</p>
<p><strong>Security Compliance:</strong> The service ensures that the organization's IT systems adhere to relevant security standards, regulations, and best practices. This includes compliance with industry-specific requirements and government regulations like GDPR, HIPAA, ISO 27001, and more.</p>
<p><strong>Risk Management:</strong> By conducting risk assessments and threat modeling, the service helps identify potential security threats and their impact on the organization. It provides a framework for developing risk mitigation strategies and disaster recovery plans.</p>
<p><strong>Security Architecture Design:</strong> The service outlines a robust and resilient security architecture that aligns with the overall enterprise architecture. This design involves selecting and integrating security technologies, implementing access controls, encryption, and intrusion detection systems.</p>
<p><strong>Continuous Review and Improvement:</strong> Enterprise Architecture Planning & Review is an ongoing process. Regular assessments and reviews are conducted to adapt to the evolving threat landscape, new technologies, and changing business needs.</p>
<p>Vendor and Technology Evaluation: The service may involve evaluating third-party vendors and technologies to ensure that they meet security standards and do not introduce potential risks.</p>
<hr />
<h2>Security Awareness Training</h2>
<p>Security Awareness Training is a crucial component of any organization's cybersecurity strategy. It is an educational program designed to inform and educate employees, contractors, and other personnel about potential security risks, threats, and best practices to protect sensitive information and digital assets.</p>
<p>The primary goal of Security Awareness Training is to cultivate a security-conscious culture within the organization, where all members are aware of the importance of data security and their role in safeguarding it. The training covers a wide range of topics, including:</p>
<p><strong>Phishing Awareness:</strong> Educating employees about the dangers of phishing emails and how to identify and report suspicious messages.</p>
<p><strong>Password Security:</strong> Emphasizing the significance of strong passwords, multi-factor authentication, and the importance of not sharing login credentials.</p>
<p><strong>Data Protection:</strong> Informing staff about the handling and protection of sensitive data, both electronically and in physical form.</p>
<p><strong>Social Engineering:</strong> Raising awareness about social engineering tactics used by attackers to manipulate employees into revealing confidential information.</p>
<p><strong>Mobile Device Security:</strong> Addressing security risks associated with mobile devices and providing guidelines on securing them.</p>
<p><strong>Safe Internet Usage:</strong> Educating personnel on safe browsing practices and avoiding potentially harmful websites and downloads.</p>
<p><strong>Physical Security:</strong> Highlighting the importance of securing physical assets, such as laptops, mobile phones, and access badges.</p>
<p><strong>Reporting Incidents:</strong> Encouraging employees to report any security incidents promptly to the appropriate personnel or IT department.</p>
<p>The training sessions can be conducted through various formats, such as in-person workshops, online modules, videos, interactive quizzes, and periodic reminders. Regular updates and refresher courses are essential to reinforce the importance of security awareness and to stay abreast of the ever-evolving cybersecurity landscape.</p>
<p>By equipping employees with the knowledge and tools to identify and respond to potential threats, Security Awareness Training plays a pivotal role in reducing the organization's vulnerability to cyberattacks, protecting sensitive data, and safeguarding the overall integrity and reputation of the company.</p>
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