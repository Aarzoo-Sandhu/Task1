import { createContext, useState } from "react";
export const ImageContext = createContext();


const ImageContextProvider = (props) => {
    const [image, setImage] = useState('Food');
    const readData = (text) => {
        setImage(text)
    }

    return (
        <ImageContextProvider value={{ image, readData }}>
         {props.children}
        </ImageContextProvider>
    )
}

export default ImageContextProvider;