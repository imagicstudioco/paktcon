import React from 'react';

import Herosection from '../components/Herosection';
import InfoSection from '../components/InfoSection';
import {homeObjOne , homeObjTwo, homeObjThree } from '../components/InfoSection/Data'


const Home = () => {
   


    return (

        <>
        
       
        <Herosection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
         
        </>

     );

    };




export default Home;