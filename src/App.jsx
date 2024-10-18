import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookForm from '@/components/BookForm';
import Navbar from './components/Navbar';
import BookList from './components/BookList'; 
import BookDetail from './components/BookDetail'; 
import './app.css'


function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Introduction to Computer', author: 'Amit Garg', genre: 'Fiction', publicationDate: '2011', status: 'available', imageUrl: "https://m.media-amazon.com/images/I/61K1DyBTIrL._AC_UF1000,1000_QL80_.jpg" },
    { id: 2, title: 'Client Server Computing', author: 'Lalit Kumar', genre: 'Non-fiction', publicationDate: '2012', status: 'borrowed', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZt39Kg8F72okGPETf1vaENWi8SV5huAzRww&s' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', publicationDate: '1925', status: 'borrowed', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJpVszbtxlnCt9Ln3nug38RIStzs9IvEu1rw&s' },
    { id: 4, title: '1984', author: 'George Orwell', genre: 'Dystopian', publicationDate: '1949', status: 'borrowed', imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg' },
    { id: 5, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', publicationDate: '1960', status: 'available', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbmHyPCCMuOHrf_wCUbdDcURsEXybFvfGvg&s' },
    { id: 6, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', publicationDate: '1951', status: 'available', imageUrl: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2010/02/2326a7_e6d8ea079e4344e791725f50fbb89a94mv2.jpg?resize=263%2C388&quality=89&ssl=1' },
    { id: 7, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', publicationDate: '1813', status: 'available', imageUrl: 'https://images.squarespace-cdn.com/content/v1/58c180edff7c50dd0e51a2ad/1596042032039-IN7LLXRVDKGVC854LVHE/9780241375273.jpg' },
    { id: 8, title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', publicationDate: '1851', status: 'available', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmKTyeu7vgl6Gtr3F00DJRh1TQKOH_lTk_AA&s' },
    { id: 9, title: 'War and Peace', author: 'Leo Tolstoy', genre: 'Historical Fiction', publicationDate: '1869', status: 'available', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGu7Ym_a_FdlP1VxjBmdkXDg5ajjZJQnCkg&s' },
    { id: 10, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Adventure', publicationDate: '1988', status: 'available', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4T0aNvgYdBX8kfK_qYc046QFsSXhHE2NXWw&s' },
  ]);

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<BookList books={books} />} />
          <Route path="/book/:id" element={<BookDetail books={books} setBooks={setBooks} />} />
          <Route path="/add-book" element={<BookForm setBooks={setBooks} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
