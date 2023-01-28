import "./style.css"
const Skeleton = ({ item }) => {
  return [...Array(item).keys()].map(() => (
  <>  <div className="animate-pulse">
  <div className="bg-gray-900 rounded-lg h-72"></div>
</div>


</>
  ))
}

export default Skeleton