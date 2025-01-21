import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./AddBook.css";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: "", author: "", category: "" });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.title && book.author && book.category) {
      dispatch(addBook({ ...book, id: Date.now() }));
      navigate("/browse");
    }
  };

  return (
    <motion.div
      className="add-book-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={book.title} onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author" value={book.author} onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" value={book.category} onChange={handleChange} required />
        <button type="submit">Add Book</button>
      </form>
    </motion.div>
  );
};

export default AddBook;
