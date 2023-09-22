import React, { useState, useEffect } from 'react';
import ImageCard from '../components/ImageCard';
import Search from '../components/Search';
import { FaSpinner } from 'react-icons/fa';
import Draggable from 'react-draggable'; // Import Draggable

const Account = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [uniqueImageIds, setUniqueImageIds] = useState(new Set());
  const [error, setError] = useState(null);

  useEffect(() => {
    setUniqueImageIds(new Set());
    setError(null);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulated loading for 2 seconds

    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        const uniqueImages = data.hits.filter(image => !uniqueImageIds.has(image.id));
        setImages(uniqueImages);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [term, uniqueImageIds]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Search searchText={(text) => setTerm(text)} />

      {isLoading ? (
        <div className="flex justify-center items-center mt-8">
          <FaSpinner className="animate-spin text-6xl text-teal-500" />
        </div>
      ) : error ? (
        <h1 className="text-5xl text-center mt-8">{error}</h1>
      ) : images.length === 0 ? (
        <h1 className="text-5xl text-center mt-8">No Images Found</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {images.map(image => (
            <Draggable key={image.id}>
              <div>
                <ImageCard image={image} />
              </div>
            </Draggable>
          ))}
        </div>
      )}
    </div>
  );
};

export default Account;
