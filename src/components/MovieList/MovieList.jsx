/* import { Link, useLocation } from "react-router-dom";
import { Container, MovieWrapper, MovieName } from "./MovieList.styled";

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {console.log(movies)}
      {movies.map((movie) => (
        <MovieWrapper key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            
            <MovieName>{movie.name}</MovieName>
          </Link>
        </MovieWrapper>
      ))}
    </Container>
  );
}; */