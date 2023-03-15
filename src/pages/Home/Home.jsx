import { Links, Title } from "./Home.styled";

const Home = ({trendsFilm}) => {
  console.log(trendsFilm)
  return (
    
    <main>
      <Title>Trending today</Title>
      <ul>
        {trendsFilm.map((film) => <Links to={`/movies/:${film.id}`} key={film.id}>{film.title ?? film.name}        
        </Links>)}
     </ul>
    </main> 
  );
};

export default Home;