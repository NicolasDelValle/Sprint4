import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { Button, InputGroup, FormControl, Container } from "react-bootstrap";

function ItemList() {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state);

  console.log(itemList);
  console.log("cargado");
  return (
    <Container>
      <h1>Hola</h1>
    </Container>
  );
}

export default ItemList;
