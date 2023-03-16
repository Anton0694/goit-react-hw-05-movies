import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { getMovieById } from "../API";
import { useEffect } from "react";

const MovieDetails = () => {
  const { movieId } = useParams();
  
const id = movieId.split('').splice(1, movieId.length).join('')

  useEffect(() => {
    getMovieById(id).then(data => console.log(data.data))
    
  }, [id])



  /* const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies"; */

  return (
    <main>
      {/* <BackLink to={backLinkHref}>Back to movies</BackLink> */}
     
      <div>
        <h2>
        {/*   Movie - {movie.title} */}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
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