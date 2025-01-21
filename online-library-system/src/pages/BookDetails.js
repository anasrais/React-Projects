import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./BookDetails.css";

const booksData = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "A novel set in the 1920s about wealth and love.", rating: 4.5 },
  { id: 2, title: "1984", author: "George Orwell", description: "A dystopian novel about surveillance and control.", rating: 4.8 },
  { id: 3, title: "The Selfish Gene", author: "Richard Dawkins", description: "A book about evolutionary biology.", rating: 4.7 },
  { id: 4, title: "Dune", author: "Frank Herbert", description: "A sci-fi novel about politics and power in a desert world.", rating: 4.6 },
  { id: 5, title: "Astrophysics for People in a Hurry", author: "Neil deGrasse Tyson", description: "A simplified guide to astrophysics.", rating: 4.4 },
];

const BookDetails = () => {
  const { id } = useParams();
  const book = booksData.find((b) => b.id === parseInt(id));

  if (!book) {
    return <h2>Book not found.</h2>;
  }

  return (
    <motion.div
      className="book-details-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>{book.title}</h1>
      <h3>by {book.author}</h3>
      <p>{book.description}</p>
      <p><strong>Rating:</strong> {book.rating} ⭐</p>
      <Link to="/browse" className="back-button">Back to Browse</Link>
    </motion.div>
  );
};

export default BookDetails;
