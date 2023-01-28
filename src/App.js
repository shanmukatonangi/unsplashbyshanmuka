import { createContext, useState } from "react";
import Images from "./components/Images";
import Jumbutron from "./components/Jumbutron";
import Navbar from "./components/Navbar";
import Scrollablemenu from "./components/Scrollablemenu";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=editorial&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Navbar />
      <Scrollablemenu />
      <Jumbutron>
        <SearchField />
      </Jumbutron>
      <Images />
    <HourglassBottomIcon />
      
    </ImageContext.Provider>
  );
}

export default App;
