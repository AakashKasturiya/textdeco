import React from "react";
import './Toggle.css';

export default function Toggle()
{
    return(
        <>
         
          <input type="checkbox" id="toggle_checkbox"/>

          <label forHTML="toggle_checkbox" id="label">
        <div id="star">
    <div className="star" id="star-1">★</div>
    <div className="star" id="star-2">★</div>
  </div>
  <div id="moon"></div>
</label>
        </>
    );
  
}