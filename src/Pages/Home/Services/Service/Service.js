import React from "react";
import { Button, Card } from "react-bootstrap";

const Service = (props) => {
  const { title, description, price, imageUrl } = props.service;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <strong>BDT {price}</strong>
          <Button variant="success w-100">Proceed Checkout</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
