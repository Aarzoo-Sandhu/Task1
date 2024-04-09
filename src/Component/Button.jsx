import React, {useContext } from "react";
import {ImageContext} from '../Context/ImageContext';

const Button = (item) => {
  const { images, readData } = useContext(ImageContext);
  const handleClick = () => {
    readData(item);
  };

  return (
    <button
      onClick={handleClick}
      className={`font-bold py-2 px-4 rounded mr-2 ${images === item ? 'bg-blue-900 text-white' : 'bg-blue-500 text-black'}`}
    >
      {item}
    </button>
  );
};

export default Button;
