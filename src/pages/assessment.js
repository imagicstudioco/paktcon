import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from '../components/AuditForm/Form';


const Assesment = () => {
  




    return (

        <>
  <div className="breadcrumb-area">
        <div className="overlay overlay-bg"></div>
        <div className="container">
            <div className="breadcrumb-content">
                <h2>Free Security Assesment</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className="active">Free Security Assesment</li>
                </ul>
            </div>
        </div>
    </div>
     <div className="main-sec"></div>
 


 <div id="content"> 
  <Container>
    <section className="contact-us light-gray-bg">
      <div className="container-fluid">
        <div className="row">
     
        
          
      <Container position="bottom-center" limit={1} />
          <div className="col-md-8">
            <h3 className="font-alegreya margin-top-50">FREE SECURITY ASSESTMENT</h3>
            <div className="contact-form"> 
            
             
             <div className="row">
             <Form />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
</div>
        </>

    

     );

    };

export default Assesment;