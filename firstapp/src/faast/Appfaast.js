import React from 'react';
import './assets/faastdata.css';

import gptlogo from './assets/logo.svg';
import Apigc from './Apifaast.js';



const Appfaast = () => {
  return (
    <div className="App2" id ="faastbingo">
     
     <nav className="navbar navbar-expand-lg" id ="faastnavigation">
    <div className="container-fluid" id ="faastcars">
      <a className="navbar-brand" href="/"><img src={gptlogo} alt="" />Admito.AI</a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     
      



    </div>
  </nav>



     <div className="content" id = "faastunique">

<h1 className="head1"> Welcome to Admito.ai </h1>
<h2 className="head2"> You Can Ask Anything About Faast University</h2>

</div>




      <div><Apigc /></div>
    </div>
  );
};

export default Appfaast;
