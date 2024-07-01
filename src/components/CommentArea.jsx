import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = ({ recensioni, selectedCardId }) => {
  console.log("Rendering CommentArea with recensioni:", recensioni); // Debug log

  return (
    <Container>
      <Row>
        <Col>
          <CommentList recensioni={recensioni} />
          <AddComment selectedCardId={selectedCardId} />
        </Col>
      </Row>
    </Container>
  );
};

export default CommentArea;
