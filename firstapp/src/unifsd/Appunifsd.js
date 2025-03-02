import React from 'react';
import './assets/unifsddata.css';

import gptlogo from './assets/logo.svg';
import Apigc from './Apiunifsd.js';



const Appunifsd = () => {
  return (
    <div className="App2" id ="unifsdbingo">
     
     <nav className="navbar navbar-expand-lg" id ="unifsdnavigation">
    <div className="container-fluid" id ="unifsdcars">
      <a className="navbar-brand" href="/"><img src={gptlogo} alt="" />Admito.AI</a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     
      



    </div>
  </nav>



     <div className="content" id = "unifsdunique">

<h1 className="head1"> Welcome to Admito.ai </h1>
<h2 className="head2"> You Can Ask Anything About University Of Faisalabad</h2>

</div>




      <div><Apigc /></div>
    </div>
  );
};

export default Appunifsd;
