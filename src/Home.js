import { Link } from "react-router-dom";

function Home (){
  return(
    <div className="container">
      
       <div className="doctors">
        <h2 style={{margin:'20px'}} className="text-center">Meet Our Doctors</h2>
        <div className="row">
        <div className="col-md-4 col-sm-12">
          <div className="text-center card mb-4">
          <img src="image.jpg/mufy.JPG" alt="Dr mufy" className="img-thumbnail"/>
          
          <h3>Dr. Mufidah Aliyu Badamasi</h3>
          <p>Specializing in Internal Medicine</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="text-center card mb-4">
          <img src="image.jpg/lukkuman.PNG" alt="lukku" className="img-thumbnail" style={{height:'350px'}}/>
          <h3>Dr. Lukkuman Auwal</h3>
          <p>Expert in Pediatrics</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="text-center card mb-4">
          <img src="image.jpg/walid.PNG" alt="walid" className="img-thumbnail"  style={{height:'350px'}} />
          <h3>Dr. Walid Kabir</h3>
          <p>Expert in surgery</p>
          </div>
        </div>
      </div>
      <section className="appointments">
        <h2>You can schedule an Appointment and Book your Blood Test with us</h2>
        <p>we will contact you after schedule your appointment. click her to <Link to='/Appointments'>schedule
       </Link> or <Link to='/BloodTest'>Book</Link></p>
      </section>   
      </div>
    </div>
    
  )
}
export default Home;