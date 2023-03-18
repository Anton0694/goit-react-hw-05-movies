import { Links } from "./MovieList.styled"
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";

export const MovieList = ({ movies }) => {
 const location = useLocation();
  return (
    <ul>
      {movies.map((film) => <Links to={`/movies/${film.id}`} state={{from: location}} key={film.id}>{film.title ?? film.name}
      </Links>)}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};