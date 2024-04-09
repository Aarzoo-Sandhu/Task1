import Container from './Component/Container';
import ImageContextProvider from './Context/ImageContext';
import React from "react";

function App() {
  return (
    <ImageContextProvider>
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-6xl font-custom font-bold text-center mb-10">SnapShot</h1>
        <Container />
      </div>
    </div>
    </ImageContextProvider>
  );
}

export default App;
