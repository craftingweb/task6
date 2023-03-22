import Container from "../components/Container";
import { useParams, Link } from "react-router-dom";
import "../book.css";

import { useState, useEffect } from "react";

const Book = () => {
  const params = useParams();
  const [books, setBooks] = useState([]);
  const getDataBook = async () => {
    const url = `https://api.matgargano.com/api/books/${params.id}`;
    try {
      const request = await fetch(url);
      const response = await request.json();
      setBooks(response);
    } catch (e) {
      setError("Error: " + e.message);
    }
  };
  useEffect(() => {
    getDataBook();
  }, []);
  //class="font-mono text-3xl font-bold tracking-wide text-center text-indigo-500 uppercase bg-fuchsia-400 border-2  "

  return (
    <>
      <div>
        <ol className="breadcrumbnav">
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li> Book</li>
        </ol>
      </div>
      <div className="book">
        <div className="card">
          <div className="description title">Title: {books.title}</div>
          <div className="description author">Author: {books.author}</div>
          <div className="description publisher">
            Publisher: {books.publisher}
          </div>
          <div className="description pages">Pages: {books.pages}</div>
          <div className="description year">Year: {books.year}</div>
          <img src={books.imageURL} alt="" />
        </div>
      </div>
    </>
  );
};

export default Book;
