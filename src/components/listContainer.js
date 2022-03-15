import { Container } from "react-bootstrap";
import InputItem from "./inputItem";
import ItemList from "./ItemList";

function ListContainer() {
  return (
    <Container className="w-50 p-5">
      <InputItem />
      <ItemList />
    </Container>
  );
}

export default ListContainer;
