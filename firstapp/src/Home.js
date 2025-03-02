import React from 'react';
import './main.css';




import gptlogo from './ntu/assets/logo.svg';
import rob from './ntu/assets/rob.jpg';
import pic1 from './ntu/assets/NTUlogo.jpg';
import pic2 from './ntu/assets/gclogo.svg';
import pic3 from './ntu/assets/agri.jpg';
import pic4 from './ntu/assets/unifsd.png';
import pic5 from './ntu/assets/riphah.png';
import pic6 from './ntu/assets/fast.png';

import { useNavigate, Link, Router } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleProceedClick = () => {
    navigate('/App');
  };

  const handleProceedClickgc = () => {
    navigate('/Apps2');
  };

  const handleProceedClickunifsd = () => {
    navigate('/Appunifsd');
  };

  const handleProceedClickriphah = () => {
    navigate('/Appriphah');
  };

  const handleProceedClickfaast = () => {
    navigate('/Appfaast');
  };

  const handleProceedClickagri = () => {
    navigate('/Appagri');
  };

 




    return (
      <div className="App">
       
      



    <header id="header" className="header d-flex align-items-center">

<div className="container-fluid container-xl d-flex align-items-center justify-content-between">
  <a href="" className="logo d-flex align-items-center">
  
     <img src={gptlogo} alt="" /> 
    <h1>Admito.AI<span>.</span></h1>
  </a>
  
  

</div>
</header>

<section id="hero" className="hero">
  <div className="container position-relative">
    <div className="row gy-5" data-aos="fade-in">
      <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
        <h2>Welcome to <span>Admito.AI</span></h2>
        <p>Find information about your desired University here. Click Below to Chat with University.</p>

      </div>
      <div className="col-lg-6 order-1 order-lg-2">
        <img src={rob} className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
      </div>
    </div>
  </div>

  <div className="icon-boxes position-relative">
    <div className="container position-relative">
      <div className="row gy-4 mt-5">
     

      
        <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="icon-box" id="one">
            <div className="icon"><img src={pic1} className="pic" alt="" /></div>
            <h4 className="title"><button id='colorntu' onClick={handleProceedClick}  className="stretched-link">National Textile University</button></h4>
          </div>
        </div>

        <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="icon-box" id="two">
            <div className="icon"><img src={pic2} className="pic" alt="" /></div>
            <h4 className="title"><button id='colorgc' onClick={handleProceedClickgc} className="stretched-link">Government College University</button></h4>
          </div>
        </div>

        <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div className="icon-box" id="three">
            <div className="icon"><img src={pic3} className="pic" alt="" /></div>
            <h4 className="title"><button id='coloragri' onClick={handleProceedClickagri} className="stretched-link">Agriculture University Faisalabad</button></h4>
          </div>
        </div>

        <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div className="icon-box" id="four">
            <div className="icon"><img src={pic4} className="pic" alt="" /></div>
            <h4 className="title"><button id='colorunifsd' onClick={handleProceedClickunifsd} className="stretched-link">The University Of Faisalabad</button></h4>
          </div>
        </div>

        <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div className="icon-box" id="five">
            <div className="icon"><img src={pic5} className="pic" alt="" /></div>
            <h4 className="title"><button id='colorriphah' onClick={handleProceedClickriphah} className="stretched-link">Riphah International University Faisalabad</button></h4>
          </div>
        </div>

        <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div className="icon-box" id="six">
            <div className="icon"><img src={pic6} className="pic" alt="" /></div>
            <h4 className="title"><button id='colorfaast' onClick={handleProceedClickfaast} className="stretched-link">Fast University Chiniot</button></h4>
          </div>
        </div>
      
    
     
    



      </div>
    </div>
  </div>
</section>

<footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 col-md-12 footer-info">
            <a href="" className="logo d-flex align-items-center"><img src={gptlogo} alt="" />
              <span>Admito.Ai</span>
            </a>
            <p>
              A platform where you can chat with your desired university.
            </p>
            
          </div>

         

          <div className="col-lg-6 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              P-16 Vip Block <br />
              Al-Barkat Villas, Satyana Road<br />
              Faisalabad <br /><br />
              <strong>Phone:</strong> +92 309 9962439<br />
              <strong>Email:</strong> generativewaleed@gmail.com<br />
            </p>
          </div>
        </div>
      </div>

      
    </footer>
  

   
  
        
      </div>
      
    );
  };
  


  export default Home;