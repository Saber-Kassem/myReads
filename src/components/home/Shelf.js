import React, { useContext } from "react";
import { booksContext } from "../../App";
import List from "../common/List";
import PropTypes from "prop-types";

const Shelf = ({ shelf, title }) => {
  const bookList = useContext(booksContext);
  const list = bookList.filter((b) => b.shelf === shelf);

  return (
    <div>
      <h2 className="title">{title}</h2>
      <p className="count">
        {list.length} {list.length > 1 ? "Books" : "Book"} on the shelf
      </p>
      <List books={list} />
    </div>
  );
};

Shelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Shelf;
