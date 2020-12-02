//External Library Imports
import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './App.css';

//Local imports
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';


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
                subTitle: 'Projects that make a difference',
                text: 'Hover for a preview'
            },
            about: {
                title: 'About Mutsa',
                subTitle: 'Projects that make a difference',
                text: 'Hover for a preview'
            },
            contact: {
                title: "Let's Talk",
                subTitle: 'Projects that make a difference',
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

                    <Route path="/" exact render={() => <Homepage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                    <Route path="/about" render={() => <Aboutpage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text}/>} />
                    <Route path="/contact" render={() => <Contactpage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text}/>} />
                    
                    <Footer />

                </Container>
            </Router>
        ];
    }
}

export default App;