import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Slider from './component/Slider';

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
                        <Navbar.Brand href="#home">
                            <h2 className='font-bold'><i className='fa fa-book'></i> BOOK VILLA</h2>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto mb-2 mb-lg-0">
                                <Nav.Link href="#home">Home</Nav.Link>                                
                                <NavDropdown title="Books" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">By Title</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        By Author
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">By Genere</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        View All
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#link">About</Nav.Link>
                                <Nav.Link href="#link">Contact</Nav.Link>
                            </Nav>
                            <div className='d-flex gap-1'>
                                <a href='' className='nav-link'><i className='fa fa-search'></i></a>
                                <a href='' className='nav-link' id='cart-icon'><i className='fa fa-cart-plus'></i><span>5</span></a>                                
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Slider></Slider>
            </section>
            
        </>
    )
}