import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa'; // Import the spinner icon

const Search = ({ searchText, loading }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }

  return (
    <div className='max-w-sm rounded overflow-hidden mx-auto my-20 text-white relative'>
      <form onSubmit={onSubmit} name='search' className="max-w-sm">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Images..."
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
            disabled={loading} // Disable the button while loading
          >
            {loading ? (
              <FaSpinner className="animate-spin" /> // Show the spinner when loading
            ) : (
              'Search'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
