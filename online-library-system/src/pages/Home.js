import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy", "History"];
const popularBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
];

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Welcome to the Online Library</h1>
      <p>Explore a vast collection of books from various genres.</p>

      <h2>Book Categories</h2>
      <div className="categories">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="category-box"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={`/books/${category.toLowerCase()}`}>{category}</Link>
          </motion.div>
        ))}
      </div>

      <h2>Popular Books</h2>
      <div className="popular-books">
        {popularBooks.map((book) => (
          <motion.div
            key={book.id}
            className="book-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <Link to={`/book/${book.id}`}>View Details</Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
