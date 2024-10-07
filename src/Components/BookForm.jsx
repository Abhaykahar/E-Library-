import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookForm = ({ setBooks }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    publicationDate: '',
    imageUrl: ''
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();


    const newBook = {
      ...formData,
      id: Math.floor(Math.random() * 1000),
      status: 'available',
      imageUrl: URL.createObjectURL(image) 
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
    navigate('/');
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block text-gray-700 mb-1">Title</label>
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>


        <div>
          <label className="block text-gray-700 mb-1">Author</label>
          <input
            type="text"
            placeholder="Author"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>


        <div>
          <label className="block text-gray-700 mb-1">Genre</label>
          <input
            type="text"
            placeholder="Genre"
            value={formData.genre}
            onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>


        <div>
          <label className="block text-gray-700 mb-1">Publication Date</label>
          <input
            type="text"
            placeholder="Publication Date"
            value={formData.publicationDate}
            onChange={(e) => setFormData({ ...formData, publicationDate: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>


        <div>
          <label className="block text-gray-700 mb-1">Upload Book Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>


        <div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
