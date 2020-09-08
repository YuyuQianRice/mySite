import React, {useState} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';




function Header() {
    const [logedIn] = useState(false);

    return (
    <div>
        
        <Navbar collapseOnSelect expand="lg" bg="light" sticky="top" >
        <Navbar.Brand href="home">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="Works">Works</Nav.Link>
            <Nav.Link href="Blogs">Blogs</Nav.Link>
            <NavDropdown title="Contact" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
                </Nav>
                {/* <Nav>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                  </Nav.Link>
                </Nav> */}
                    <div class="col-5 text-center">
                        <a class="blog-header-logo text-dark" href="#">Yuyu Qian</a>
                    </div>
                    <div class="col-4 d-flex justify-content-end align-items-center">
                        <a class="text-muted" href="#" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
                        </a>
                        <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                    </div>
              </Navbar.Collapse>
            </Navbar>
            <header class="blog-header py-3 ">
                <div class="row flex-nowrap justify-content-between align-items-center">
                    {/* <div class="col-4 pt-1">
                        <a class="text-muted" href="#">Subscribe</a>
                    </div>
                    <div class="col-4 text-center">
                        <a class="blog-header-logo text-dark" href="#">Large</a>
                    </div>
                    <div class="col-4 d-flex justify-content-end align-items-center">
                        <a class="text-muted" href="#" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
                        </a>
                        <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                    </div> */}
                </div>
            </header>
    
    </div>
    );
}

export default Header;