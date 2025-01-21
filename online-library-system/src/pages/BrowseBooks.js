import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./BrowseBooks.css";

const booksData = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "fiction" },
  { id: 2, title: "1984", author: "George Orwell", category: "fiction" },
  { id: 3, title: "The Selfish Gene", author: "Richard Dawkins", category: "non-fiction" },
  { id: 4, title: "Dune", author: "Frank Herbert", category: "sci-fi" },
  { id: 5, title: "Astrophysics for People in a Hurry", author: "Neil deGrasse Tyson", category: "science" },
];

const BrowseBooks = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter books by category (if provided) and search term
  const filteredBooks = booksData.filter((book) => {
    return (
      (!category || book.category.toLowerCase() === category.toLowerCase()) &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <motion.div
      className="browse-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>{category ? `Books in ${category}` : "Browse Books"}</h1>

      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <motion.div key={book.id} className="book-card" whileHover={{ scale: 1.05 }}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <Link to={`/book/${book.id}`} className="view-details">
                View Details
              </Link>
            </motion.div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </motion.div>
  );
};

export default BrowseBooks;
