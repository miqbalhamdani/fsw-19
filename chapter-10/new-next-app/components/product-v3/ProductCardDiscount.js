import React from "react";
import ProductCardItem from "./ProductCardItem";

import { Container, Col, Row, Card, Figure } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function ProductCardDiscount() {
  const products = useSelector((state) => state.product.products);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Card>
            <h1>{products[0].title}</h1>
            <Card.Body className="d-flex gap-3">
              <Figure className="m-0">
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://via.placeholder.com/30x75"
                  className="m-0"
                />
              </Figure>

              {products[0].items.map((item) => (
                <ProductCardItem key={item.id} item={item} />
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
