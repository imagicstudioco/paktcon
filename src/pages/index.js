import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Herosection from '../components/Herosection';
import InfoSection from '../components/InfoSection';
import {homeObjOne , homeObjTwo, homeObjThree } from '../components/InfoSection/Data'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

        const toggle = () =>{
        setIsOpen(!isOpen)
        }


    return (

        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Herosection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        </>

     );

    };




export default Home;