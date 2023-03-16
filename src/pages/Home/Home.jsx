import { Title } from "./Home.styled";
import { MovieList } from "components/MovieList/MovieList";

const Home = ({trendsFilm}) => {

  return (
    
    <main>
      <Title>Trending today</Title>
      <MovieList movies={trendsFilm} />
    </main> 
  );
};

export default Home;