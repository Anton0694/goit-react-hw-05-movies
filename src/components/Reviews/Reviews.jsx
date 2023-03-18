import { getMovieReviews } from "../../API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Reviews = () => {
  const [reviewsData , setReviewsData] = useState(null)
  const { movieId } = useParams();
  
  useEffect(() => {
  
    const fetchData = async () => {
   
      const reviewsData  = await getMovieReviews(movieId)
      setReviewsData(reviewsData.data);
    }
    fetchData()
  }, [movieId])

  if (reviewsData  === null) {
    return
  } 

  return (
    <ul>
       {reviewsData.results.length === 0 && (<p>We don't have any reviews for this movie</p>) }
       {reviewsData.results.map(({ author_details, content, id }) => (
         <li key={id}>
          
           {reviewsData.results.length !== 0 && (
             <div><h3>Author: {author_details.username}</h3>
               <p>{content}</p>
             </div>)}
          
           
        </li>))}
      
    </ul>
  );
};
 
export default Reviews;