import { useContext } from "react"
import Masonry from "react-masonry-css";
import { ImageContext } from "../App"
import Image from "./Image";
import Skeleton from "./Skeleton";
import "./style.css"

const Images = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  const { response, isLoading, searchImage } = useContext(ImageContext);

  return (
    <>
      <br></br>
    {  <Masonry
      breakpointCols={breakpointColumnsObj}
  
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
  { response.map((data, key) => <img src={data.urls.small} alt={data.alt_description} key={key} />)}
</Masonry> }

     
    </>
  )
}

export default Images