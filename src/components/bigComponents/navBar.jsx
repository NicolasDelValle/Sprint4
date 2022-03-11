import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Modal,
} from "react-bootstrap";
export default function PageNavBar({ handleShow }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          href="#home"
          className="navbar-brand border-bottom border-info pb-0 mb-1 lh-1"
        >
          HACKFLIX
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Button
            variant="outline-info"
            className="ms-5 me-3"
            onClick={() => handleShow()}
          >
            <i class="bi bi-search"></i>
          </Button>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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
  );
}
