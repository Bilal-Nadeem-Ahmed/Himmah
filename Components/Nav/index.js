import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
const Navigation = () => {
    return ( 

        <Navbar bg="white" fixed='top' expand="lg">
        <Navbar.Brand href="/"> 
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
              <NavDropdown.Item href="/donate/virtualfooddonation">Virtual Food Donation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://cafdonate.cafonline.org/3767#!/DonationDetails">Donate Now</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/foodbank">Himmah Food Bank</Nav.Link>
            <Nav.Link href="https://www.nottinghampeoplespantry.org/">Nottingham Peoples Pantry</Nav.Link>
            <Nav.Link href="/referral">Covid 19 Chrisis Referral</Nav.Link>
            <NavDropdown title="What We Do" id="basic-nav-dropdown">
              <NavDropdown.Item href="/#tacklingpoverty">Tackling Poverty</NavDropdown.Item>
              <NavDropdown.Item href="/#tacklinghate">Tackling Hate</NavDropdown.Item>
              <NavDropdown.Item href="/foodbank">Food Bank</NavDropdown.Item>
              <NavDropdown.Item href="https://www.nottinghampeoplespantry.org/">Nottingham People's Pantry</NavDropdown.Item>
              <NavDropdown.Item href="/muslimmemoryproject">Muslim Memory Project</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Race & Islamophobia Helpline</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/#salaamshalomkitchen">Salaam Shalom Kitchen</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/tastytuesday">Tasty Tuesday Photography Club</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     );
}
 
export default Navigation;