import React, { useContext } from "react";
import {ImageContext} from '../Context/ImageContext';
import Button from "./Button";
import Gallery from "./Gallery";
import Search from "./Search";

const Container = () => {
    const { image} = useContext(ImageContext);

  return (
    <div className="container mx-auto px-4">
      <Search/>
      <div className="flex justify-center mb-8">
        <Button item="Food"/>
        <Button item="Mountains"/>
        <Button item="Beaches"/>
        <Button item="Water"/>
      </div>
      
      <h1 className="text-3xl font-bold text-center mb-8">{image.charAt(0).toUpperCase() + image.slice(1)} Pictures</h1>
      
      <Gallery/>
    </div>
  );
};

export default Container;
