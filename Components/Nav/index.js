import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
const Navigation = () => {
    return ( 

        <Navbar bg="light" fixed='top' expand="lg">
        <Navbar.Brand href="#home"> 
          <img
        src="https://static1.squarespace.com/static/5d944e82da8bd81bea8ea1b7/t/5ee92f1755fd771bd65a283b/1609511342452/?format=1500w"
        width="auto"
        height="auto"
        className="d-inline-block align-top"
        alt=" logo"
      />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <NavDropdown title="Donate" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Virtual Food Donation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://cafdonate.cafonline.org/3767#!/DonationDetails">Donate Now</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Himmah Food Bank</Nav.Link>
            <Nav.Link href="#home">Nottingham Peoples Pantry</Nav.Link>
            <Nav.Link href="#home">Covid 19 Chrisis Referral</Nav.Link>
            <NavDropdown title="What We Do" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tackling Poverty</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Tackling Hate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Food Bank</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Nottingham People's Pantry</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Muslim Memory Project</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Race & Islamophobia Helpline</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Salaam Shalom Kitchen</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Community Safety Forum</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="#home">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     );
}
 
export default Navigation;