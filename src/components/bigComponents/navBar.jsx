import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Modal,
} from "react-bootstrap";
import { toggleSearchModal } from "../../actions/commonActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function PageNavBar() {
  const dispatch = useDispatch();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="text-decoration-none" to={"/"}>
          <Navbar.Brand
            href="#home"
            className="navbar-brand border-bottom border-info pb-0 mb-1 lh-1"
          >
            HACKFLIX
          </Navbar.Brand>
        </Link>
        <Nav className="ms-auto">
          <Button
            variant="outline-info"
            className="me-3 px-4"
            onClick={() => toggleSearchModal(dispatch)}
          >
            <i className="bi bi-search"></i>
          </Button>
        </Nav>

        <Nav className="">
          <Nav.Link>
            {" "}
            <Link className="text-decoration-none text-white" to={"/directory"}>
              Directorio
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
