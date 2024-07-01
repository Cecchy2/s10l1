import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = ({ books, onCardClick, selectedCardId, recensioni }) => {
  return (
    <Container>
      <Row>
        <Col xs={8}>
          <Row>
            {books.map((book) => (
              <Col xs={4} key={book._id}>
                <SingleBook book={book} onCardClick={onCardClick} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={4}>
          <h3 className="text-center">Book’s Reviews</h3>
          {selectedCardId && <CommentArea recensioni={recensioni} selectedCardId={selectedCardId} />}
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
