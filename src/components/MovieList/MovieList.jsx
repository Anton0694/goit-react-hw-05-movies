import { Links } from "./MovieList.styled"
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((film) => <Links to={`/movies/${film.id}`} key={film.id}>{film.title ?? film.name}
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