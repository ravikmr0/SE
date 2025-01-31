import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Courses from './Pages/Courses'
import Notes from './Pages/Notes'
import Jobs from './Pages/Jobs'
import Dashboard from './Pages/Dashboard'

export default function App(){
  return(
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/dashboard' element={<Dashboard />} />




      </Routes>
    </BrowserRouter>
   
  );
}
