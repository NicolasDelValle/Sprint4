import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { Button, FormControl, Container } from "react-bootstrap";

function InputItem() {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state);
  const [valueToSet, setValueToSet] = useState(0);
  return (
    <Container>
      <FormControl
        placeholder="Agregar item"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </Container>
  );
}

export default InputItem;
