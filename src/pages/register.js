import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './form.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [otherName, setOtherName] = useState('');
    const [maleGender, setMaleGender] = useState('');
    const [femaleGender, setFemaleGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [loading, setLoading] = useState(false);
    
    
    
    
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(firstName,lastName,otherName,maleGender,femaleGender,emailAddress,phoneNumber);
        // Submit the form data to an API or perform any other action
    
        if (!firstName || !emailAddress || !phoneNumber ) {
          return toast.error('Please fill name, email, phone');
        }
        try {
          setLoading(true);
          const { data } =  axios.post(`http://localhost:5000/post`, {
            firstName,lastName,otherName,maleGender,femaleGender,emailAddress,phoneNumber,
          });
          setLoading(false);
          toast.success(data.message);
        } catch (err) {
          setLoading(false);
          toast.error(
            err.response && err.response.data.message
              ? err.response.data.message
              : err.message
          );
        }
    
    
    
    
        setFirstName('');
        setLastName('');
        setOtherName('');
        setMaleGender('');
        setFemaleGender('');
        setEmailAddress('');
        setPhoneNumber('');
      };
    




    return (

        <>
  <div className="breadcrumb-area">
        <div className="overlay overlay-bg"></div>
        <div className="container">
            <div className="breadcrumb-content">
                <h2>Cyber Security Training Registration</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className="active">Free Security Assesment</li>
                </ul>
            </div>
        </div>
    </div>
     <div className="main-sec"></div>
 

  <ToastContainer position="bottom-center" limit={1} />
 <div id="content"> 
  <Container>
  <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration">
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form id="contact_form"  className="contact-form" method="post" onSubmit={handleSubmit}>
                         
              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" 
                    id="firstName" 
                    className="form-control 
                    form-control-lg" 
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                    />
                    <label className="form-label" for="firstName">First Name</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                  <input type="text" 
                    id="lastName" 
                    className="form-control 
                    form-control-lg" 
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                    />
                    <label className="form-label" for="lastName">Last Name</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                  <div className="form-outline">
                    <input type="text" 
                    id="otherName" 
                    className="form-control 
                    form-control-lg" 
                    value={otherName}
                    onChange={event => setOtherName(event.target.value)}
                    />
                    <label for="otherName" className="form-label">Other Name</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <h6 className="mb-2 pb-1">Gender: </h6>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option1" checked />
                    <label className="form-check-label" for="maleGender">Male</label>
                  </div>

                
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option2" />
                    <label className="form-check-label" for="femaleGender">Female</label>
                  </div>

                

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="text" 
                    id="emailAddress" 
                    className="form-control 
                    form-control-lg" 
                    value={emailAddress}
                    onChange={event => setEmailAddress(event.target.value)}
                    />
                    <label className="form-label" for="emailAddress">Email</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="text" 
                    id="phoneNumber" 
                    className="form-control 
                    form-control-lg" 
                    value={phoneNumber}
                    onChange={event => setPhoneNumber(event.target.value)}
                    />
                    <label className="form-label" for="phoneNumber">Phone Number</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-12">

                  <select className="select form-control-lg">
                    <option value="1" disabled>Choose option</option>
                    <option value="2">Subject 1</option>
                    <option value="3">Subject 2</option>
                    <option value="4">Subject 3</option>
                  </select>
                  <label className="form-label select-label">Choose option</label>

                </div>
              </div>

              <div className="mt-4 pt-2">
              <button disabled={loading} type="submit">
              {loading ? 'Sending...' : 'Submit'}
            </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<br />
<br />
  </Container>
</div>
        </>

    

     );

    };

export default Register;