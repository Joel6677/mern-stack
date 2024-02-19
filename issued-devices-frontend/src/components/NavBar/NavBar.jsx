import { Navbar, Nav, NavItem, Form, Row, Col, Button } from 'react-bootstrap'

import {
    Link,
} from "react-router-dom"

const padding = {
    padding: 5,
}

const NavBar = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="primary">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#notes" as="span">
                            <Link style={padding} to="/devices">Devices</Link>
                        </Nav.Link>
                        <Nav.Link href="#notes" as="span">
                            <Link style={padding} to="/deviceIssueForm">Device Issuance Form</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div >
    )
}


export default NavBar