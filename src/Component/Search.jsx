import React, { useState , useContext, useEffect} from "react";
import {ImageContext} from '../Context/ImageContext';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {image, readData } = useContext(ImageContext);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    readData(searchTerm);
  };

  useEffect(()=> {
    if (image !== searchTerm) {
      setSearchTerm("");
    }
  }, [image])

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
    </form>
  );
};

export default Search;
