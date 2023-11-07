import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/Header.scss'

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className="bg-dark py-3">
                <Container>
                    <Navbar.Brand href="#home" className='text-light'>
                        <img
                        alt="Logo"
                        src="../../../imagens/logo.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-center me-3"
                        />{' '}
                        Comic Store
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-container me-auto d-flex justify-content-center w-100">
                        <Nav.Link href="#" className='nav-link me-3 text-light'>Home</Nav.Link>
                        <Nav.Link href="#" className='nav-link text-light'>Produtos</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="#" className='account me-3 align-center'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" className="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg></Nav.Link>

                        <Nav.Link href="#" className='notifications me-3 align-center'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" className="bi bi-bell" viewBox="0 0 16 16"><path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/></svg></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </header>
    )
}

export default Header