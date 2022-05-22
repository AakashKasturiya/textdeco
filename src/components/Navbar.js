import React from 'react';
import Logo from '../images/Logo.png';




export default function Navbar(props)
{
 console.warn(props); 

 return(
     
  <>
 

<nav className={`navbar bg-${props.mode}`}>
  <div className="navbar-brand">
    <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt=""  style={{marginLeft:"5px",marginTop:"10px"}} />
      <span className="Logo" style={{color:props.mode ==='dark' ? 'antiquewhite':'#20232a'}}>TeXt DeCoration</span>

  </div>
  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} style={{marginRight:"10px"}}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'🌙':'☀️'}</label>
</div>
</nav>

</>
     
 );

}