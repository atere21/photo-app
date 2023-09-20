import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className="bg-white rounded-lg overflow-hidden 
     cursor-pointer shadow-lg transition-transform duration-500 transform hover:scale-105">
      <img src={image.webformatURL} alt={`Photograph by ${image.user}`} className="w-full h-auto " />
      <div className="px-6 py-2">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul className="text-teal-500 ">
          <li>
            <strong>Views:</strong> {image.views}
          </li>
          <li>
            <strong>Downloads:</strong> {image.downloads}
          </li>
          <li>
            <strong className=''>Likes:</strong> {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-500 mr-2 my-2">
            #{tag.trim()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
