import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
  const [filter, setFilter] = useState({ genre: '', author: '', publicationDate: '' });

  const filteredBooks = books.filter((book) => {
    return (
      (filter.genre === '' || book.genre.toLowerCase().includes(filter.genre.toLowerCase())) &&
      (filter.author === '' || book.author.toLowerCase().includes(filter.author.toLowerCase())) &&
      (filter.publicationDate === '' || book.publicationDate.toLowerCase().includes(filter.publicationDate.toLowerCase()))
    );
  });

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Book List</h2>


      <div className="mb-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Filter by author"
          className="input border p-2 rounded w-full md:w-1/3"
          onChange={(e) => setFilter({ ...filter, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by genre"
          className="input border p-2 rounded w-full md:w-1/3"
          onChange={(e) => setFilter({ ...filter, genre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by publication date"
          className="input border p-2 rounded w-full md:w-1/3"
          onChange={(e) => setFilter({ ...filter, publicationDate: e.target.value })}
        />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <div key={book.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link to={`/book/${book.id}`}>
              <div className="p-4">
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-full h-48 object-cover bg-top mb-4 rounded"
                />
                <h3 className="text-lg font-bold mb-2">{book.title}</h3>
                <p className="text-gray-700">Author: {book.author}</p>
                <p className="text-gray-700">Genre: {book.genre}</p>
                <p className="text-gray-700">Published: {book.publicationDate}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
