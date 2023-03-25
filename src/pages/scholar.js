import React from "react";
import "./scholar.css";
import "./button.css"
import image from './OIP.jpeg'
function Scholar() {
  return (
    <>
      <h1 style={{marginLeft:"400px",fontSize:"40px",color:"green"}}>Available Scholarships</h1>
    <div className="i">
      <img className='q' src={image} alt="dog image" />
      <h1 className='d'>DONATIONS</h1>
      <button className='g'>CLICK TO DONATE</button>
    </div>
      <div className="u">
      <table className="ui very basic table">
        <thead>
          <tr>
            <th style={{fontSize:"30px"}}>Scholarships</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a style={{fontSize:"20px"}}>"https://scholarships.gov.in/"</a></td>
          </tr>
          <tr>
            <td><a style={{fontSize:"20px"}}>https://scholarships.educational.andhrapradesh.in/</a></td>
          </tr>
          <tr>
            <td><a style={{fontSize:"20px"}}>https://scholarships.uttarpradesh.gov.in</a></td>
          </tr>
          <tr>
            <td><a style={{fontSize:"20px"}}>https://scholarships.vasathidevena.ap.gov.in</a></td>
          </tr>
          <tr>
            <td><a style={{fontSize:"20px"}}>https://scholarships.uttarpradesh.gov.in</a></td>
          </tr>
          <tr>
            <td><a style={{fontSize:"20px"}}>https://scholarships.vasathidevena.ap.gov.in</a></td>
          </tr>
          <tr>
            <td><a style={{fontSize:"20px"}}>https://scholarships.educational.andhrapradesh.in/</a></td>
          </tr>
          <tr>
            <td><a style={{fontSize:"20px"}}>https://scholarships.uttarpradesh.gov.in</a></td>
          </tr>
          <tr>
            <td><a style={{fontSize:"20px"}}>https://scholarships.vasathidevena.ap.gov.in</a></td>
          </tr>
          <tr>
            <td><a style={{fontSize:"20px"}}>https://scholarships.uttarpradesh.gov.in</a></td>
          </tr>
          <tr>
            <td><a style={{fontSize:"20px"}}>https://scholarships.educational.andhrapradesh.in/</a></td>
          </tr>
          <tr>
            <td><a style={{fontSize:"20px"}}>https://scholarships.uttarpradesh.gov.in</a></td>
          </tr>
          <tr>
            <td><a style={{fontSize:"20px"}}>https://scholarships.vasathidevena.ap.gov.in</a></td>
          </tr>
          <tr>
            <td><a style={{fontSize:"20px"}}>https://scholarships.uttarpradesh.gov.in</a></td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}
export default Scholar;
