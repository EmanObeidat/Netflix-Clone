import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalCard from "./ModalCard";
import {useState} from 'react';

export default function SingleCard(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.data.image} />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>{props.data.time}</Card.Text>
          <Button variant="primary" onClick={handleShow}>show details</Button>
        </Card.Body>
      </Card>

      <ModalCard show={show}  handleClose={handleClose} recipeData = {props.data}/>
    </>
  );
}