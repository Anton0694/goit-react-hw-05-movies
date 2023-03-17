import { getMovieReviews } from "../../API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Reviews = () => {
 /*  const [rewiesData, setRewiesData] = useState(null)
  const { movieId } = useParams();
  
  useEffect(() => {
  
    const fetchData = async () => {
   
      const rewiesData = await getMovieReviews(movieId)
      setRewiesData(rewiesData.data);
    }
    fetchData()
  }, [movieId])
 */
 
  
  return (
    <ul>
      <li>

      </li>
      <p>

      </p>
   </ul>
  );
};

export default Reviews;