import React from "react";
import Book from "../book/Book";
import PropTypes from "prop-types";

function List({ books }) {
  const list = books.map((book) => (
    <Book key={book.id} book={book} id={book.id} />
  ));
  return (
    <div>
      <ul className="book-list">{list}</ul>
    </div>
  );
}

List.propTypes = {
  books: PropTypes.array.isRequired,
};

export default List;
