import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { getMovieById } from "../API";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = getMovieById(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
     
      <div>
        <h2>
          Movie - {movie.title}
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
      <h3>Aditional information</h3>
      <ul>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieDetails;