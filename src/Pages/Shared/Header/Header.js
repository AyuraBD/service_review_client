import React, { useContext } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../assets/img/logo.png';
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch()
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="cleaning services logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/servicesall">services</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>    

                        </Nav>
                        <Nav>
                            {
                                user?.email ?
                                <>
                                    <Nav.Link href="/reviews">Reviews</Nav.Link>
                                    <Nav.Link href="/addService">Add Service</Nav.Link>
                                    <Nav.Link>{user.email}</Nav.Link>
                                    <Nav.Link onClick={handleLogOut} className="bg-danger text-white font-bold btn">Log out</Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                </>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;