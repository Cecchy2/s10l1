import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleClick = () => {
    this.setState({ selected: !this.state.selected });
    this.props.onCardClick(this.props.book._id);
  };

  render() {
    const { book } = this.props;
    return (
      <Card onClick={this.handleClick} className={this.state.selected ? "selected-card" : ""}>
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
