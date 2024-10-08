import React from "react";
import AddBook from "./AddBook/addbook.js";
import "./App.css";

const App = () => {
  return (
    <div className="add-book-container">
      <header className="app-header">
        <h1>Library</h1>
        <h3>Books for Students</h3>
      </header>
      <main>
        <AddBook />
      </main>
    </div>
  );
};

export default App;
