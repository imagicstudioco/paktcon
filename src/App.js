import React, {useState} from 'react';
import './App.css';
import Home from './pages/index';
import About  from './pages/about';
import Certifications  from './pages/certifications';
import Partnerships  from './pages/partnerships';
import Contact  from './pages/contact';
import Services  from './pages/services';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


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
      <Route path="/partnerships" element={<Partnerships />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/services" element={<Services />}/>
    </Routes>
    <Footer />
    </Router>
    
  );
}

export default App;
