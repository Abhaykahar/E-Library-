import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const navigate = useNavigate();


  const book = books.find((book) => book.id.toString() === id);

  const handleBorrow = () => {
    console.log(`Borrowed: ${book.title}`);
    navigate('/');
  };

  const handleReturn = () => {
    console.log(`Returned: ${book.title}`);
    navigate('/');
  };

  if (!book) return <div>Book not found</div>;

  return (
    <div className="flex justify-center mt-10">
      <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-full h-64 bg-cover object-cover "
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
          <p className="text-gray-700">Author: {book.author}</p>
          <p className="text-gray-700">Genre: {book.genre}</p>
          <p className="text-gray-700">Publication Date: {book.publicationDate}</p>

          <div className="mt-6">
            {book.status === 'available' ? (
              <button
                onClick={handleBorrow}
                className="w-64 bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
              >
                Borrow
              </button>
            ) : (
              <button
                onClick={handleReturn}
                className="w-64 bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg"
              >
                Return
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
