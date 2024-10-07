import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">E-Library</Link>
        <div>
          <Link to="/" className="mr-4">Books</Link>
          <Link to="/add-book">Add Book</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
