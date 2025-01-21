import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NotFound.css";

const NotFound = () => {
  return (
    <motion.div
      className="not-found-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="home-button">Go to Home</Link>
    </motion.div>
  );
};

export default NotFound;
