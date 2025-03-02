import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homee from './Home.js';
import NTU from './ntu/App.js';
import GCU from './gc/Apps2.js';
import Agri from './agri/Appagri.js';
import Unifsd from './unifsd/Appunifsd.js';
import Riphah from './riphah/Appriphah.js';
import Fast from './faast/Appfaast.js';





const Mainapp = () => {
    return (
      <div className="App">
       
    
     
      
        <Routes>
    <Route path="/" element={<Homee />} />
    <Route path="App" element={<NTU />} />

    <Route path="Apps2" element={<GCU />} />
    <Route path="Appagri" element={<Agri />} />
    <Route path="Appunifsd" element={<Unifsd />} />
    <Route path="Appriphah" element={<Riphah />} />
    <Route path="Appfaast" element={<Fast />} />
  </Routes>
     
    



         

         

      
   
  

   
  
        
      </div>
      
    );
  };
  


  export default Mainapp;