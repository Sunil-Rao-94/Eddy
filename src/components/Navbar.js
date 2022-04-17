// component files need to be named beginning with an upper case
import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

//props item passed need not be named as 'props' 
export default function Navbar(props) {
  // 
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}
      </a>
      {/* note in the above line it is important to enclose item in braces else simply the text will be displayed */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li> */}
          
          
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="What is it?" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Find</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> 
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="mybox">Enable_Dark_mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

//you can set your prop types here
Navbar.propTypes = { 
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
  }
  
  //set default values for props
  Navbar.defaultProps = { 
    title : "Isha Foundation",
    aboutText : "Rudraksha Deeksha"
  };
