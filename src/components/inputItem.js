import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { Button, FormControl, InputGroup, Container } from "react-bootstrap";

function InputItem() {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state);
  const [valueToSet, setValueToSet] = useState(0);
  return (
    <Container>
      <InputGroup className="mb-3 position-relative">
        <Button className="rounded-circle position-absolute" variant="success">
          <i className="bi bi-plus-lg"></i>
        </Button>
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </Container>
  );
}

export default InputItem;
