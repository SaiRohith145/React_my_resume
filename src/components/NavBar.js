import React from 'react';

import {Navbar, Nav, Button,Form,NavDropdown,FormControl} from 'react-bootstrap';

function NavBar() {
    return (
    <React.Fragment>
            <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#/home">
                    SAI ROHITH
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#/home">Home</Nav.Link>
                <Nav.Link href="#/about">About</Nav.Link>
                <NavDropdown title="More.." id="basic-nav-dropdown">
                <NavDropdown.Item href="#/education">Education</NavDropdown.Item>
                <NavDropdown.Item href="#/project">Project</NavDropdown.Item>
                <NavDropdown.Item href="#/Programing_skills">Programing Skills</NavDropdown.Item>
                <NavDropdown.Item href="#/skills">Skills</NavDropdown.Item>
                <NavDropdown.Item href="#/end">End</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form> */}
                </Navbar.Collapse>
            </Navbar>{/*top Nav bar ends here*/}
            
            {/* {
                [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                    'white',
                    
                    ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        This is a {variant} alert—check it out!
                    </Alert>
                    ))
            }
            
            <br />
            <Navbar bg="dark" fixed="bottom" variant="dark" expand="lg">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/logo192.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                React-Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>  
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Navbar> */}

    </React.Fragment>
    )
}

export default NavBar;
