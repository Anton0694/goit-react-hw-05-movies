import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast, BASE_IMG_URL } from "../../API";



const Cast = () => {
const { movieId } = useParams();
  const [castData, setCastData] = useState(null)
  

  useEffect(() => {
  
    const fetchData = async () => {
   
      const castData = await getMovieCast(movieId)
      setCastData(castData.data);
    }
    fetchData()
  }, [movieId])

  
 
if (castData === null) {
    return
  }

const castPosterItem = castData.cast.map(cast => cast.profile_path)
  console.log(castPosterItem)
  return (
    <div>
      <ul>
        <li>
      <img src={`{BASE_IMG_URL}${castPosterItem}`} alt="" />
        </li>
   </ul>
      
          
       {/*    <p>{responseData.title}</p> 
          
          
          <p>Characters: {responseData.overview}</p>  */}
          
          </div>
     
  );
};

export default Cast;