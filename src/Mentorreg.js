import './register.css'
import React, { useState } from "react";

function Mentor() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    graduation:"",
    experience:"",
    
  });

  const handleChange = event => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(student);
  };

  return (
    <div className='body'>
    <div className="card">
    

    <form onSubmit={handleSubmit}   >
  <h2 className="title">Sign up</h2>
      <div>
      <i class="zmdi zmdi-account-o" style={{fontSize:'50px', marginLeft:'15px'}}></i>
        <input className="input" type="text" id="name" name="name" value={student.name} onChange={handleChange} placeholder="your name"/>
      </div>

      <div>
      <i class="zmdi zmdi-email" style={{fontSize:'40px', marginLeft:'9.5px'}}></i>
        <input className="input" type="text" id="email" name="email" value={student.name} onChange={handleChange} placeholder="your email"/>
     </div>

      <div>
      <i class="zmdi zmdi-phone-in-talk" style={{fontSize:'40px', marginLeft:'15px'}}></i>
        <input className="input" type="number" id="phoneNumber" name="phoneNumber" value={student.phoneNumber} onChange={handleChange} placeholder="your phoneNumber "/>
      </div>

      <div>
      <i class="zmdi zmdi-graduation-cap" style={{fontSize:'40px', marginLeft:'10px'}}></i>
        <input className="input" type="text" id=" graduation" name=" graduation" value={student. graduation} onChange={handleChange} placeholder="your graduation details "/>
      </div>

      <div>
      <i class="zmdi zmdi-explicit" style={{fontSize:'40px', marginLeft:'15px'}}></i>
        <input className="input" type="text" id="experience" name="  experience" value={student.  experience} onChange={handleChange} placeholder="your experience "/>
      </div>

     {/* <center>
      <button className="button" class="ui primary labeled icon button" type="submit">Registration</button></center> */}
             <center>   <button  className="button" class="ui primary labeled icon button" type="submit">
            Registration 
          </button> </center>
    </form>
    </div>
    </div>
  );
}

export default Mentor;