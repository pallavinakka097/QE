import Navbar from "./stunavbar"
import Scholar from './pages/scholar'
import Home from './pages/Home'
import Quizes from "./pages/quizes"
import Courses from './pages/courses'
import Career from "./pages/career"
import Post from "./pages/post"
import { Route, Routes } from "react-router-dom"
function App() {
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Courses" element={<Courses/>}/>
        <Route path="/Quizes" element={<Quizes/>}/>
        <Route path="/Career" element={<Career/>}/>
        <Route path="/Scholar" element={<Scholar/>}/>
        <Route path="/post" element={<Post/>}/>
      </Routes>
    </>
  )
}
export default App;
