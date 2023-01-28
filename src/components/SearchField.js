import { useContext, useState } from "react"
import { ImageContext } from "../App";
import SearchIcon from '@mui/icons-material/Search';

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }
  const handleButtonSearch = () => {
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
    setSearchValue("");
    setSearchImage(searchValue);
  }
  const handleEnterSearch = e => {
    if(e.key === 'Enter') {
      fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
      setSearchValue("");
      setSearchImage(searchValue);
    }
  }

  return (
    <div className="flex">
       <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className="bg-blue-600 px-6 py-2.5 text-white rounded-tl rounded-bl focus:ring-2 focus:ring-gray-300 disabled:bg-gray-200"
      ><SearchIcon style={{color:"darkgray"}} /></button>
      <input
        className="bg-gray-200 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-gray-500 focus:ring-2 rounded-tr rounded-br text-dark"
        type="search"
        placeholder="Search high-resolution images "
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
        />
     
    </div>
  )
}

export default SearchField