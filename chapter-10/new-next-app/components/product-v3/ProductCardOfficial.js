import React from "react";
import ProductCardItem from "./ProductCardItem";

import { Container, Col, Row, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function ProductCardOfficial(props) {
  const products = useSelector((state) => state.product.products);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Card>
            <h1>{products[1].title}</h1>
            <Card.Body className="d-flex gap-3">
              {products[1].items.map((item) => (
                <ProductCardItem key={item.id} item={item} />
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
