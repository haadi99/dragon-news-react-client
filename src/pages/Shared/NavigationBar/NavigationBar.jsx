import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <Navbar className='mt-3' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/category/0">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="">career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <Nav.Link href="#deets">
                                <FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle>
                            </Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                user?<Button variant="secondary">LogOut</Button>: 
                                    <Link to='/login'><Button variant="secondary">Login</Button></Link>
                                    }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;