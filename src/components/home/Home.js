import React from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const Home = () => {
  return (
    <div>
      <h1 className="header">My Reads</h1>
      <div className="shelves">
        <Shelf shelf="currentlyReading" title="Currently Reading" />
        <Shelf shelf="wantToRead" title="Want To Read" />
        <Shelf shelf="read" title="Read" />
      </div>
      <Link to="/search" className="link">
        <div className="add"></div>
      </Link>
    </div>
  );
};

export default Home;
