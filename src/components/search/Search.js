import React, { useEffect, useState, useMemo } from "react";
import debounce from "lodash.debounce";
import { search } from "../../BooksAPI";
import SearchBox from "./SearchBox";
import List from "../common/List";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [books, setBooks] = useState([]);

  const debouncedSearch = useMemo(
    () => debounce((e) => setQuery(e.target.value), 300),
    []
  );

  useEffect(() => {
    if (query)
      search(query).then((response) => {
        console.log(response);
        if (response.length !== undefined) {
          setBooks(response);
          setError("");
        } else {
          setBooks([]);
          setError("No Matches, Try Again");
        }
      });
    else {
      setBooks([]);
      setError("");
    }
  }, [query]);

  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="home-link">Home</div>
      </Link>
      <SearchBox delay={debouncedSearch} />

      <List books={books} />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Search;
