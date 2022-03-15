import { Container } from "react-bootstrap";
import InputItem from "./inputItem";
import ItemList from "./ItemList";

function ListContainer() {
  return (
    <Container>
      <InputItem />
      <ItemList />
    </Container>
  );
}

export default ListContainer;
