import React from 'react';
import   './ntudesign.css';


import gptlogo from './assets/logo.svg';


import AskQuestion from './AskQuestion.js';






const App = () => {
  return (
    <div className="App" id = "hello">
     
     <nav className="navbar navbar-expand-lg" id = "turk">
    <div className="container-fluid" id = "turkfluid">
      <a className="navbar-brand" href="/"><img src={gptlogo} alt="" />Admito.ai</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     
       </div>
  </nav>



     
  <div className="content" id= "ali">

<h1 className="head1" id="bye1"> Welcome to Admito.ai </h1>
<h2 className="head2" id = "bye2"> You Can Ask Anything About National Textile University</h2>

</div>





      <div><AskQuestion /></div>


      
      
    </div>
    
  );
};

export default App;
