import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Footer from './components/Footer'
import { Route,Routes } from 'react-router-dom'
import Aboutpage from './components/About/About'
import Blogpage from './components/Blog/Blog'
import Projectpage from './components/Project/Project'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'


const App = () => {
  
  const Homepage =() => {
  return (
    <div>
   <Navbar/>
   <Landing/>

    </div>
  )
}
return (
  <div className='w-full h-screen  text-white  '>
 <Navbar/>
<Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/home' element={<Homepage/>}/>
  <Route path='/about' element={<Aboutpage/>}/>
  <Route path='/project' element={<Projectpage/>}/>
  <Route path='/blog' element={<Blogpage/>}/>
  <Route path='/contact' element={<Homepage/>}/>
  
</Routes>
<Footer/>
  </div>
)
 
}
export default App
