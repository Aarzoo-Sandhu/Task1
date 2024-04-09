import React, { useState , useContext} from "react";
import {ImageContext} from '../Context/ImageContext';

const Search = ({children}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const {readData } = useContext(ImageContext);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    readData(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search"
        className="border border-gray-300 rounded-l py-2 px-4 focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-r py-2 px-4 hover:bg-blue-700 focus:outline-none">
        Search
      </button>
      {children}
    </form>
  );
};

export default Search;
