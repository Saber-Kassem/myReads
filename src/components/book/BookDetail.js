import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { get } from "../../BooksAPI";
import "./bookDetail.css";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [desc, setDesc] = useState("");

  useEffect(() => {
    get(id).then((b) => {
      setBook(b);
      setDesc(b.description.substring(0, 250));
    });
  }, [id]);
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="home-link">Home</div>
      </Link>
      <h1 className="b-title">{book.title}</h1>

      <div className="book-wrapper">
        <li key={book.id} className="book-box">
          <div className="top">
            <div
              className="cover"
              style={{
                backgroundImage: `url(${
                  book.imageLinks !== undefined
                    ? book.imageLinks.thumbnail
                    : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                })`,
              }}
            ></div>
          </div>

          <div className="details">
            <ol className="author-list">
              <p>Authors: </p>
              {book.authors &&
                book.authors.map((author, index) => (
                  <li key={index} className="writer">
                    - {author}
                  </li>
                ))}
            </ol>

            <div className="statistics">
              <span>
                <i className="fa-solid fa-star"> </i>
                {book.averageRating ? book.averageRating : " " + 0}
              </span>

              <span>
                <i className="fa-solid fa-clock"> </i>
                {" " + book.publishedDate}
              </span>

              <span>
                <i className="fa-solid fa-file"> </i>
                {" " + book.pageCount}
              </span>
            </div>

            <p className="description">{desc}</p>
          </div>
        </li>
      </div>
    </div>
  );
};

export default BookDetail;
