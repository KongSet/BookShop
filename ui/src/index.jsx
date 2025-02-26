import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

window.addEventListener('scroll', function(){
    if(this.scrollY > 150) {
        this.document.getElementById('siteNav').classList.add('scroll-active');
    } else {
        this.document.getElementById('siteNav').classList.remove('scroll-active');
    }
});

export default function SiteIndex() {
    return (
        <>
            <section id="header">
                <Navbar id='siteNav' expand="lg" sticky='top'>
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div id='slider'></div>
            </section>
            
        </>
    )
}