import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { getMovieById } from "../API";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  
  const { movieId } = useParams();
 const [responseData, setResponseData] = useState()  


  useEffect(() => {
 
    const fetchData = async () => {
      const responseData = await getMovieById(movieId)
      setResponseData(responseData.data);
    }
fetchData()
  }, [movieId])

  console.log(responseData)

/*   const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies"; */

  return (
    <main>
      {/* <BackLink to={backLinkHref}>Back to movies</BackLink> */}
     
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
        <h2>
         {/*  Movie - {responseData.title} */}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
         
          </p>
          </div>
      </div>
    {/*   <h3>Aditional information</h3>
      <ul>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </ul>
      <Outlet /> */}
    </main>
  );
};

export default MovieDetails;