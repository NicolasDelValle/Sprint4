import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { Button, InputGroup, FormControl, Container } from "react-bootstrap";

function Count() {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state);
  const [valueToSet, setValueToSet] = useState(0);
  return (
    <div>
      <Container>
        <InputGroup className="w-25 mb-3 bg-light">
          <Button onClick={() => dispatch({ type: "inc" })} variant="success">
            +
          </Button>
          <Button onClick={() => dispatch({ type: "dec" })} variant="danger">
            -
          </Button>

          <Button
            variant="primary"
            onClick={() =>
              dispatch({ type: "set", payload: Number(valueToSet) })
            }
          >
            Set
          </Button>
          <FormControl
            onInput={(event) => setValueToSet(event.target.value)}
            aria-label="Example text with two button addons"
          />
          <span>PASOS :D {taskList}</span>
        </InputGroup>
      </Container>
    </div>
  );
}

export default Count;
