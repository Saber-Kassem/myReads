import React, { useEffect, useState } from "react";
import Search from "./components/search/Search";
import Home from "./components/home/Home";
import { getAll, update } from "./BooksAPI";
import BookDetail from "./components/book/BookDetail";
import { Route, Routes } from "react-router-dom";
import "./App.css";

export const booksContext = React.createContext();
export const shelfContext = React.createContext();

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll().then((response) => {
      if (response.length !== undefined) {
        setBooks(response);
      } else {
        setBooks([]);
      }
    });
  }, []);

  const pickShelf = (book, shelf) => {
    book.shelf = shelf;
    update(book, shelf).then(() => {
      setBooks([...books.filter((b) => b.id !== book.id), book]);
    });
  };
  return (
    <div className="App">
      <booksContext.Provider value={books}>
        <shelfContext.Provider value={pickShelf}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search" element={<Search />} />
            <Route path="/books/:id" element={<BookDetail />} />
          </Routes>
        </shelfContext.Provider>
      </booksContext.Provider>
    </div>
  );
}

export default App;
