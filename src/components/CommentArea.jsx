import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.selectedCardId !== this.props.selectedCardId && this.props.selectedCardId) {
      this.props.fetchReviews();
    }
  }

  render() {
    const { recensioni, selectedCardId } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            {selectedCardId ? (
              <>
                <CommentList recensioni={recensioni} />
                <AddComment selectedCardId={selectedCardId} />
              </>
            ) : (
              <p className="text-center">Select a book to see reviews</p>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CommentArea;
