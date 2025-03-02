import React from 'react';
import gptlogo from './assets/logo.svg';

import PropTypes from 'prop-types';

export default function Navbarriphah(props) {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img src={gptlogo} alt="" />Admito.ai</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     
       </div>
  </nav>
  )
}

