import React from "react";
import './square.css';



function Square ()  {


  return (
    <button className="square">
      <select className="square" >
        <option value="" ></option>
        <option value="wc" > Ilha Whole Cake </option>
        <option value="k" className="k">Ilha Kuraigana</option>
        <option value="r" id="r" >Ilha Rusukaina</option>
        <option value="m" id="m">Ilha Momoiro</option>
        <option value="mf" id="mf">Marinford</option>
      </select>
      {/* TODO */}
    </button>
  );
    
}

export default Square;