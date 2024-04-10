import { createContext, useState } from "react";
export const ImageContext = createContext();


const ImageContextProvider = (props) => {
    const [image, setImage] = useState('Food');
    const readData = (text) => {
        setImage(text.toLowerCase())
    }
    return (
        <ImageContext.Provider value={{ image, readData }}>
         {props.children}
        </ImageContext.Provider>
    )
}

export default ImageContextProvider;