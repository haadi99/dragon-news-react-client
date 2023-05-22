import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {

    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <h6 className='text-muted'>{moment().format("dddd, MMMM, YYYY")}</h6>
            </div>
            <div className="d-flex mt-3">
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={70}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;