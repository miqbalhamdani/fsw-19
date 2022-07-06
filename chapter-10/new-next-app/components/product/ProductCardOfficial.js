import React from "react";
import ProductCardItem from "./ProductCardItem";

import { Container, Col, Row, Card } from "react-bootstrap";

export default function ProductCardOfficial(props) {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Card>
            <h1>{props.product.title}</h1>
            <Card.Body className="d-flex gap-3">
              {props.product.items.map((item) => (
                <ProductCardItem key={item.id} item={item} />
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
