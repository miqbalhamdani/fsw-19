import React from "react";

import { Card, Button } from "react-bootstrap";

export default function ProductCardItem(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://via.placeholder.com/75x50" />
      <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>{props.item.desc}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
