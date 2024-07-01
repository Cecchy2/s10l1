import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class AllTheBooks extends Component {
  state = {
    books: [],
    genre: "",
  };

  render() {
    return (
      <Container>
        <Row>
          {fantasy.map((book, index) => (
            <Col key={index}>
              <Card style={{ width: "18rem", marginBottom: "1rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text>{book.price}€</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
