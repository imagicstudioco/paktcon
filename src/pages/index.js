import React from 'react';

import Herosection from '../components/Herosection';
import InfoSection from '../components/InfoSection';

import Pricing from '../components/Pricing';
import {homeObjOne , homeObjTwo, homeObjThree } from '../components/InfoSection/Data'


const Home = () => {
   


    return (

        <>
        
       
        <Herosection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <Pricing />
        <InfoSection {...homeObjThree} />
         
        </>

     );

    };




export default Home;