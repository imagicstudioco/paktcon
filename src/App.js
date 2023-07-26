import React, {useState} from 'react';
import './App.css';
import Home from './pages/index';
import About  from './pages/about';
import Certifications  from './pages/certifications';
import Contact  from './pages/contact';
import Services  from './pages/services';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Twitter  from './pages/twitter';
import Facebook  from './pages/facebook';
import Instagram  from './pages/instagram';
import Linkedin  from './pages/linkedin';
import Audit from './pages/audit';


function App() {

 const [isOpen, setIsOpen] = useState(false)

        const toggle = () =>{
        setIsOpen(!isOpen)
        }


  return (
    <Router>
     <ScrollToTop />
     <Navbar toggle={toggle} />
     <Sidebar isOpen={isOpen} toggle={toggle} />
    <Routes>
     <Route exact path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/certifications" element={<Certifications />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/audit" element={<Audit />}/>
      <Route path="/twitter" element={<Twitter />}/>
          <Route path="/facebook" element={<Facebook />}/>
          <Route path="/instagram" element={<Instagram />}/>
          <Route path="/linkedin" element={<Linkedin />}/>
    </Routes>
    <Footer />
    </Router>
    
  );
}

export default App;
