import First from './First'
import { Route, Routes } from 'react-router-dom';
import Stureg from './Stureg'
import Login from './Login';
import Reg1 from './Reg1';
import Navbar from './App1'
import Scholar from './pages/scholar'
import Quizes from "./pages/quizes"
import Courses from './pages/courses'
import Career from "./pages/career"
import Post from "./pages/post"
import Mentor from './Mentorreg';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<First/>} />
      <Route path='/Login' element ={<Login/>} />
      <Route path='/App1/*' element ={<Navbar/>} />
      <Route path="/Courses" element={<Courses/>}/>
        <Route path="/Quizes" element={<Quizes/>}/>
        <Route path="/Career" element={<Career/>}/>
        <Route path="/Scholar" element={<Scholar/>}/>
        <Route path="/post" element={<Post/>}/>
      <Route path='/Reg1' element={<Reg1/>} />
      <Route path='/Mentorreg' element={<Mentor/>} />
      <Route path='/Stureg' element={<Stureg/>} />
    </Routes>
    </>
  )
}
export default App;