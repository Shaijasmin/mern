import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import usestate from './Hooks/usestate';
const App = () => {
  return (
    <>
    {/* <Header/>
    <footer/> */}
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/usestate' element={<useState/>}/>
      <Route path='/useffect' element={<useEffect/>}/>
    </Routes>

    </>
  );
};
export default App;