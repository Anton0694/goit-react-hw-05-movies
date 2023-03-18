import { Title } from "./Home.styled";
import { MovieList } from "components/MovieList/MovieList";
import PropTypes from 'prop-types';

const Home = ({trendsFilm}) => {

  return (
    
    <main>
      <Title>Trending today</Title>
      <MovieList movies={trendsFilm} />
    </main> 
  );
};

export default Home;

Home.propTypes = {
  trendsFilm: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
      backdrop_path: PropTypes.string,
      vote_average: PropTypes.number,
    }).isRequired
  ).isRequired,
};