//External Library Imports
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './App.css';

//Local imports
import Footer from './components/Footer'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Mutsa Machingura',
            headerLinks: [
                {title: 'Home', path: '/'},
                {title: 'About', path: '/about'},
                {title: 'Contact', path: '/contact'}
            ],
            home: {
                title: 'Professionalism',
                subtitle: 'Projects that make a difference',
                text: 'Hover for a preview'
            },
            About: {
                title: 'ProfAbout Mutsa',
                subtitle: 'Projects that make a difference',
                text: 'Hover for a preview'
            },
            Contact: {
                title: "Let's Talk",
                subtitle: 'Projects that make a difference',
                text: 'Hover for a preview'
            }
        }
    }
    render() {
        return [ 
            <Router>
                <Container className="p-0" fluid={true}>
                    <Navbar className="border-bottom" bg="transparent" expand="lg">
                        <Navbar.Brand>Mutsa Machingura</Navbar.Brand>
                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>


                    <Footer />

                </Container>
            </Router>
        ];
    }
}

export default App;