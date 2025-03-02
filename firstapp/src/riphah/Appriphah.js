import React from 'react';
import   './riphahdesign.css';


import gptlogo from './assets/logo.svg';


import AskQuestion from './AskQuestionriphah.js';






const Appriphah = () => {
  return (
    <div className="App" id = "riphahhello">
     
     <nav className="navbar navbar-expand-lg" id = "riphahturk">
    <div className="container-fluid" id = "riphahturkfluid">
      <a className="navbar-brand" href="/"><img src={gptlogo} alt="" />Admito.ai</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     
       </div>
  </nav>



     
  <div className="content" id= "riphahali">

<h1 className="head1" id="riphahbye1"> Welcome to Admito.ai </h1>
<h2 className="head2" id = "riphahbye2"> You Can Ask Anything About Riphah International University</h2>

</div>





      <div><AskQuestion /></div>


      
      
    </div>
    
  );
};

export default Appriphah;
