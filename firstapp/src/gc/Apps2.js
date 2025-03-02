import React from 'react';
import './assets/gcdata.css';

import gptlogo from './assets/logo.svg';
import Apigc from './Apigc.js';



const Apps2 = () => {
  return (
    <div className="App2" id ="`bingo">
     
     <nav className="navbar navbar-expand-lg" id ="navigation">
    <div className="container-fluid" id ="cars">
      <a className="navbar-brand" href="/"><img src={gptlogo} alt="" />Admito.AI</a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     
      



    </div>
  </nav>



     <div className="content" id = "unique">

<h1 className="head1"> Welcome to Admito.ai </h1>
<h2 className="head2"> You Can Ask Anything About Government College University</h2>

</div>




      <div><Apigc /></div>
    </div>
  );
};

export default Apps2;
