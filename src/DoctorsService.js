import { useState } from "react";

function DoctorsService (){
  const [condition, setCondition] = useState('');
  const [location, setLocation] = useState('');

  const Search = () => {
    if (!condition || !location) {
      alert('Please fill in all fields.');
      return;
    }

    alert('one of our doctors will attend you in short');


    setCondition('');
    setLocation('');
  
  };



  return(
    <div style={{backgroundImage:'url(image.jpg/doctors.JPG)',backgroundAttachment:'fixed',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',color:'chocolate'}}>
    <div className="container">
      <div className="row"> 
      <h1>find a Doctor</h1>
      <div className="col-10" style={{border:'2px solid grey', height:'300px'}}>
        <div className="row" style={{marginTop:'50px'}}>
          <div className="col-md-5 col-sm-12">
       <input type="text" placeholder="tell me what is wrong with you" style={{height:'50px',fontFamily:'-moz-initial',fontSize:'25px'}} value={condition}
        onChange={(e) => setCondition(e.target.value)}/>
       <label>TELL ME THE CONDITION YOU ARE</label>
       </div>
       <div className="col-md-5 col-sm-12">
       <input type="location" placeholder="Enter your location"  style={{fontFamily:'-moz-initial',fontSize:'25px'}} value={location}
        onChange={(e) => setLocation(e.target.value)}/>
       <label>ENTER YOUR REGION</label>
       </div>
       <div className="col-md-2 col-sm-12" >
       <button className="btn btn-primary" style={{fontSize:'18px'}} onClick={Search}>Search</button>
       </div>
       </div>
      </div>
      </div>
      <div>
        <h1 className="text-center">Services</h1>
        <h3>Expert Doctor</h3>
        <div>
          <ul>
            <li>All omair health-care Doctors come with a wealth of experience in their respective domains. Each of them with years of clinical experience having worked at hospitals, corporates or as entrepreneurs</li>
            <li>At omair health-care we follow the ICD10 protocols which are accepted worldwide so that we can deliver standardized care irrespective of location. As a standard practise, while the doctors are inducted to Healthspring, they are trained on these ICD10 protocols.
</li>
            <li>Our Doctors spend as much time with you, as is necessary to understand all your health related problems, arrive at a proper diagnosis and recommend a line of treatment. You can ask as many questions to our Doctors and they will be happy to answer those.</li>
            <li>Omair health-care members have access to a doctor 24x7, face-to-face and over a call, especially in case of a medical emergency, wherein our doctor reaches your place in the shortest time possible with an Ambulance and a fully-equipped medical emergency kit.</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}
export default DoctorsService;