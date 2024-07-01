import React from "react";
import { ListGroup } from "react-bootstrap";

const CommentList = ({ recensioni }) => {
  console.log("Rendering CommentList with recensioni:", recensioni); // Debug log

  return (
    <ListGroup>
      {recensioni.map((recensione) => (
        <ListGroup.Item key={recensione._id}>{recensione.comment}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CommentList;
