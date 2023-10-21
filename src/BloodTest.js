import React, { useState } from 'react';

function BloodTest (){

  const [patientName, setPatientName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [patientScondName, setPatientScondName] = useState('');


  const scheduleAppointment = () => {
    if (!patientName || !appointmentDate || !appointmentTime  || !patientScondName) {
      alert('Please fill in all fields.');
      return;
    }

    alert(`Booking scheduled for ${patientName} ${patientScondName} on ${appointmentDate} at ${appointmentTime}.`);


    setAppointmentDate('');
    setPatientName('');
    setAppointmentTime('');
    setPatientScondName('');

  };


  return(
    <div className="" style={{ fontFamily:'sans-serif' , fontSize:'18px'}}>
      <div className="row">
        <div  style={{height:'500px', border:'1px solid grey', margin:'40px 0', color:'brown'}} className=" col-md-8 col-sm-12  text-center">
          <h1 >Overview</h1>
          <h3>Blood tests</h3>
          <h5><strong>Blood tests have a wide range of uses and are one of the most common types of medical test.</strong></h5>
         <p>For example, a blood test can be used to </p>
         <ul>
          <li>assess your general state of health</li>
          <li>check if yoou have an infection</li>
          <li>see how well certain organs, such as the liver and kidneys, are working</li>
          <li>screen for certain genetic conditions</li>
         </ul>

         <p>Most blood tests only take a few minutes to complete and are carried out at your GP surgery or local hospital by a doctor, nurse or phlebotomist (a specialist in taking blood samples).</p>

         <p>Read about some <a style={{color:'black'}} href="https://www.nhs.uk/conditions/blood-tests/types/">common types of blood test</a></p>
          
          </div>
        <div className="col-md-4 col-sm-12 text-center" style={{height:'500px', border:'1px solid grey', margin:'40px 0', color:'whitesmoke',backgroundColor:'blueviolet'}}>
      <h1>Booking Form</h1>
      <form>
        <div>
          <input type="text" placeholder="Frist Name"
           value={patientName}
           onChange={(e) => setPatientName(e.target.value)}/>
        </div>
        <div style={{marginTop:'10px'}}> 
          <input type="text" placeholder="Last Name"  value={patientScondName}
        onChange={(e) => setPatientScondName(e.target.value)}/>
        </div>
        <div>
        
          <input style={{marginTop:'10px'}} type="email" placeholder="Enter your email address"/>
        </div>
        <div className="row">
          <div>
            <label>Gender</label>
            
          <span style={{margin:'10px 10px'}}>Male</span>
          <input type="radio" value="Male" name='gender'/>
          <span style={{margin:'10px 10px'}}>Female</span>
          <input type="radio" value='Famale' name='gender'/>
          </div>
          <div>
            <input style={{marginTop:'15px'}} type="text" placeholder="phone number"/>
          </div>
          <div>
            <input style={{marginTop:'15px'}} type="text" placeholder="Enter type of blood test"/>
          </div>
          <div>
            <div style={{marginTop:'15px'}} >Enter the date & time you wish to come</div>
            <input style={{marginTop:'15px'}}  type="date"  id="appointmentDate"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}/>
          </div>
          <div style={{marginTop:'15px'}}>
          
          <input
        type="time"
        value={appointmentTime}
        onChange={(e) => setAppointmentTime(e.target.value)}
        style={{}}
      />
      </div>
          <div>
            <button onClick={scheduleAppointment} style={{marginTop:'10px'}} className="btn btn-primary">Book</button>
          </div>
        </div>
      </form>
    </div>

      </div>
    </div>
  )
}
export default BloodTest;