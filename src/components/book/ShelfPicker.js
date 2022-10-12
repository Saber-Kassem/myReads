import React, { useContext } from "react";
import PropTypes from "prop-types";
import { booksContext, shelfContext } from "../../App";

const ShelfPicker = ({ book }) => {
  const books = useContext(booksContext);
  const moveTo = useContext(shelfContext);

  const handleSelect = (e) => {
    moveTo(book, e.target.value);
  };

  let shelf = "none";

  for (let b of books) {
    if (b.id === book.id) {
      shelf = b.shelf;
      break;
    }
  }

  return (
    <div className="picker">
      <select defaultValue={shelf} onChange={handleSelect}>
        <option value="" disabled>
          Pick a Shelf
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none" id="idy">
          None
        </option>
      </select>
    </div>
  );
};

ShelfPicker.propTypes = {
  book: PropTypes.object.isRequired,
};

export default ShelfPicker;
//  "✓ "
