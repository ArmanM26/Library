import React, { useState } from "react";
import "../App.css";

const AddBook = () => {
  const [books, setBook] = useState([]);
  const [title, setTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddBook = (e) => {
    e.preventDefault();

    const newBook = {
      title,
    };

    setBook([...books, newBook]);
    setTitle("");
  };

  const handleDeleteBook = (index) => {
    const newBook = books.filter((_, index_book) => index_book !== index);
    setBook(newBook);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="add-book-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for a book by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <h2>Books to Read</h2>

      <table className="book-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteBook(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form className="add-book-form" onSubmit={handleAddBook}>
        <input
          type="text"
          className="title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new book..."
        />
        <button type="submit" className="add-button">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
