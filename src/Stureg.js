import './register.css'
import React, { useState } from "react";

function StudentForm() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    study:"",
    institution:"",
    income:""
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
    <div className='body' style={{ backgroundImage: `url("http://csrbox.org/company/proj_img/156033573187583a4d65b29f6.jpg")`,backgroundSize:'cover '}}>
    <div className="studentcard">
    

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
        <input className="input" type="text" id="study" name="study" value={student.study} onChange={handleChange} placeholder="your study "/>
      </div>

      <div>
      <i class="zmdi zmdi-city" style={{fontSize:'40px', marginLeft:'15px'}}></i>
        <input className="input" type="text" id="institution" name="institution" value={student.institution} onChange={handleChange} placeholder="your institution "/>
      </div>

      <div>
      <i class="zmdi zmdi-money" style={{fontSize:'50px', marginLeft:'20px'}}></i>
        <input  className="input" type="number" id=" income" name=" income" value={student.income} onChange={handleChange} placeholder="your father's income "/>
      </div>
      <center><button className="button" class="ui primary labeled icon button" type="submit">Registration</button></center>
    </form>
    </div>
    </div>
  );
}

export default StudentForm;