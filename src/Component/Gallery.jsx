import React, { useContext } from "react";
import {ImageContext} from '../Context/ImageContext';
import data from "../data.json";

const Gallery = () => {
    const { image} = useContext(ImageContext);
  const results = data.categories[image] ?? [];

  return (
    <div className="flex flex-wrap justify-center">
      {results.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((url, index) => (
            <li key={index} className="flex justify-center items-center">
              <img
                src={require(`../${url}`)}
                alt={`test ${index + 1}`}
                className="rounded-lg"
              />
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="text-6xl font-custom font-bold text-center mb-10">No Data Found!</h1>
      )}
    </div>
  );
};

export default Gallery;
