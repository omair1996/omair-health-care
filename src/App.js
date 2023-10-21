import React from 'react';
import Header from './Header';
import Home from './Home';
import BloodTest from './BloodTest';
import  AppointmentScheduler from './Appointments';
import DoctorsService from './DoctorsService';
import Location from './Location';
import About from './About'
import {Route, Routes, BrowserRouter as Router} from 
'react-router-dom';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/Appointments' element={< AppointmentScheduler/>}/>
    <Route path='/BloodTest' element={<BloodTest/>}/>
    <Route path='/DoctorsService' element={<DoctorsService/>}/>
    <Route path='Location' element={<Location/>}/>
    <Route path='/About' element={<About/>}/>
      </Routes>
      </div>
  );
}

export default App;
