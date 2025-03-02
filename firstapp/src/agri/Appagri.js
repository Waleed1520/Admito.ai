import React from 'react';
import   './agridesign.css';


import gptlogo from './assets/logo.svg';


import AskQuestionagri from './AskQuestionagri.js';






const Appagri = () => {
  return (
    <div className="App" id = "agriapp">
     
     <nav className="navbar navbar-expand-lg" id = "agriappturk">
    <div className="container-fluid" id = "agriappturkfluid">
      <a className="navbar-brand" href="/"><img src={gptlogo} alt="" />Admito.ai</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     
       </div>
  </nav>



     
  <div className="content" id= "agriali">

<h1 className="head1" id="agribye1"> Welcome to Admito.ai </h1>
<h2 className="head2" id = "agribye2"> You Can Ask Anything about Agriculture University</h2>

</div>





      <div><AskQuestionagri /></div>


      
      
    </div>
    
  );
};

export default Appagri;
