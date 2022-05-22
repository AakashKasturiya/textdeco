import React from 'react';


export default function Footer(props)
{

  /* Colors set by props in the variables  */

  let BackGround = {backgroundColor:props.mode ==='dark' ? 'antiquewhite':'#20232a'}
  let Color = {color:props.mode ==='dark' ? 'black':'white'}


  return(
       <>
           <nav style={BackGround}>
           <ul className="nav navbar-brand justify-content-center">
                <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/aakash-kasturiya-3b86a1115/" style={Color}> &copy; copyright by aakashkasturiya</a>
                </li>
 
           </ul> 
           </nav>
       </>
      );

}