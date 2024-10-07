import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookDetail = ({ books, setBooks }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the book by its ID
  const book = books.find((book) => book.id.toString() === id);

  // Update the book status (borrowed or available)
  const updateBookStatus = (newStatus) => {
    setBooks(books.map((b) =>
      b.id === book.id ? { ...b, status: newStatus } : b
    ));
  };

  // Handle the borrow action
  const handleBorrow = () => {
    updateBookStatus('borrowed');
    console.log(`Borrowed: ${book.title}`);
    navigate('/');
  };

  // Handle the return action
  const handleReturn = () => {
    updateBookStatus('available');
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
          className="w-full h-64 bg-cover object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
          <p className="text-gray-700">Author: {book.author}</p>
          <p className="text-gray-700">Genre: {book.genre}</p>
          <p className="text-gray-700">Publication Date: {book.publicationDate}</p>
          <p className={`font-bold mt-4 ${book.status === 'available' ? 'text-green-500' : 'text-red-500'}`}>
            Status: {book.status === 'available' ? 'Available' : 'Borrowed'}
          </p>

          <div className="mt-6 flex flex-col items-center space-y-4">
            {/* Borrow button (disabled if the book is already borrowed) */}
            <button
              onClick={handleBorrow}
              disabled={book.status === 'borrowed'}
              className={`w-64 text-white font-bold py-2 px-4 rounded-lg ${book.status === 'borrowed' ? 'bg-gray-500 cursor-not-allowed' : 'bg-black hover:bg-blue-600'}`}
            >
              Borrow
            </button>

            {/* Return button (disabled if the book is already available) */}
            <button
              onClick={handleReturn}
              disabled={book.status === 'available'}
              className={`w-64 text-white font-bold py-2 px-4 rounded-lg ${book.status === 'available' ? 'bg-gray-500 cursor-not-allowed' : 'bg-black hover:bg-gray-500'}`}
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
