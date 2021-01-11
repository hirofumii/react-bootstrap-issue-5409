// polyfill for IE11
import 'core-js/stable/object/assign';
import 'core-js/stable/array/find';
import 'core-js/stable/promise';

import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Button,
  Modal
} from "react-bootstrap";

function App() {
  return (
    <React.Fragment>
      <ModalComponent />
      <hr />
      {["Primary", "Secondary", "Success", "Info", "Warning", "Danger"].map(
        (variant) => (
          <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={`dropdown-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        )
      )}
    </React.Fragment>
  );
}

function ModalComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("container"));

module.hot.accept();
