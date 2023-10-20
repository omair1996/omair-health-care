import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink className='navbar-brand' to='/'><span style={{fontFamily:'-moz-initial'}}>Omair</span><br/>
        <span style={{fontFamily:'sans-serif'}}>Health-Care</span>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-link' to="/">Home</NavLink>
            <NavLink className='nav-link' to="/DoctorsService">
              Doctors & Service
            </NavLink>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavLink className='dropdown-item' to="/Appointments">
                Appointments
              </NavLink>
              <NavLink className='dropdown-item' to="/BloodTest">
                Blood test
              </NavLink>
              <NavLink className='dropdown-item' to="/Location">
                Locations
                </NavLink>
              <NavDropdown.Divider />
              <NavLink className='dropdown-item' to="/About">
                About
              </NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}
export default Header;