import React, { useState } from 'react';

function  AppointmentScheduler (){
  const [patientName, setPatientName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
 

  const scheduleAppointment = () => {
    if (!patientName || !appointmentDate || !appointmentTime) {
      alert('Please fill in all fields.');
      return;
    }

    alert(`Appointment scheduled for ${patientName}  on ${appointmentDate} at ${appointmentTime}.`);


    setAppointmentDate('');
    setPatientName('');
    setAppointmentTime('')
   

  };



  return(
    <div>
      <div className="container ">
        <form className='text- center' style={{border:'1px solid black', margin:'15px',fontFamily:'-moz-initial'}}>
      <h1 className='text-center'>Doctor Appointment Scheduler</h1>
      <div className='text-center'>
      <label style={{margin:'20px'}} htmlFor="patientName">Patient Name</label>
      <input
        type="text"
        id="patientName"
        placeholder="Enter your full name"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        style={{width:'300px'}}
      />
  </div>
  <div className='text-center'>
      <label style={{margin:'20px'}} htmlFor="appointmentDate">Appointment Date</label>
      <input
        type="date"
        id="appointmentDate"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        style={{width:'280px'}}
      />
</div>
<div className='text-center'>
      <label style={{margin:'20px'}} htmlFor="appointmentTime">Appointment Time</label>
      <input
        type="time"
        id="appointmentTime"
        value={appointmentTime}
        onChange={(e) => setAppointmentTime(e.target.value)}
        style={{width:'280px'}}
      />
</div>
<div className='text-center' style={{margin:'20px'}}>
      <button className='btn btn-primary' onClick={scheduleAppointment}>Schedule Appointment</button>
      </div>
      </form>
    </div>
    </div>
  )
}
export default  AppointmentScheduler;