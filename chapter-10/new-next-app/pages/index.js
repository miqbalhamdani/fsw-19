import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Navbar,
  Container,
  Carousel,
  Image,
  Col,
  Row,
  Card,
  Button,
  Figure,
} from "react-bootstrap";

export default function index() {
  const [products, setProducts] = useState([
    {
      title: "Kejar Diskon",
      items: [
        {
          id: 1,
          name: "Casing Iphone",
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          id: 2,
          name: "Baju",
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          id: 3,
          name: "Handuk",
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
      ],
    },
    {
      title: "Official Store",
      items: [
        {
          id: 10,
          name: "Kompor",
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          id: 20,
          name: "Matras",
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          id: 30,
          name: "Blender",
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
      ],
    },
  ]);

  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {products.map((product, productKey) => {
        return (
          <Container key={productKey} className="mt-5">
            <Row>
              <Col>
                <Card>
                  <h1>{product.title}</h1>
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

                    {product.items.map((item) => {
                      return (
                        <Card key={item.id} style={{ width: "18rem" }}>
                          <Card.Img
                            variant="top"
                            src="https://via.placeholder.com/75x50"
                          />
                          <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                              {item.desc}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Card>
                      );
                    })}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
}
