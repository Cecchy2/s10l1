import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  handleClick = () => {
    this.props.onCardClick(this.props.book._id);
  };

  render() {
    const { book, isSelected } = this.props;
    return (
      <Card onClick={this.handleClick} className={isSelected ? "selected-card" : ""}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.price} &euro;</Card.Text>
          <Card.Text>{book.category}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
