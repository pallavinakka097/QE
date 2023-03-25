import React from 'react'
import './register.css'
import Stureg from './Stureg';
import Mentorreg from './Mentorreg'
import { useNavigate } from "react-router-dom";
export default function As() {
    const navigate = useNavigate()
  return (
    <div>
      <div className="card2">
        <h2 className="title">Register As</h2>
        <button onClick={()=>{navigate('/Stureg')}} style={{marginLeft:'5%',textAlign:'center'}} class="ui primary labeled icon button"  type="submit">
            Student
        </button> 
        <button onClick={()=>{navigate('/Mentorreg')}} style={{marginLeft:'25%',textAlign:'center'}} class="ui primary labeled icon button"  type="submit">
            Mentor
        </button> 
       
    
    </div>

      </div>
    
  )
}