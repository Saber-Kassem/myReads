import React from "react";
import ShelfPicker from "./ShelfPicker";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const styles = {
  textDecoration: "none",
  color: "#fffaf7",
};

const Book = ({ book }) => {
  return (
    <div className="wrapper">
      <li key={book.id} className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              backgroundImage: `url(${
                book.imageLinks !== undefined
                  ? book.imageLinks.thumbnail
                  : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              })`,
            }}
          ></div>
          <ShelfPicker book={book} />
        </div>
        <div className="book-detail">
          <Link to={`/books/${book.id}`} style={styles}>
            <p className="book-title" key={book.id}>
              {book.title}
            </p>
          </Link>
          <ol className="authors">
            <p>Authors:</p>
            {book.authors &&
              book.authors.map((author, index) => (
                <li key={index} className="author">
                  - {author}
                </li>
              ))}
          </ol>
        </div>
      </li>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
