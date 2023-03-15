import { useSearchParams } from "react-router-dom";
import { MovieList } from "../components/MovieList/MovieList"
import { SearchBox } from "../components/SearchBox/SearchBox";
import { getMovieById } from "../API";
import { useEffect, useState } from "react";

const Movies = () => {
  const [movie, setMovie] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams) {
      return
    }
   getMovieById(searchParams).then(({ data }) => console.log(data))
}, [searchParams])
  

  const movieName = searchParams.get("name") ?? "";

  const visibleMovies = movie.filter((movie) =>
    movie.name.toLowerCase().includes(movieName.toLowerCase())
  );

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchBox value={movieName} onChange={updateQueryString} />
      <MovieList movies={visibleMovies} />
    </>
      

    
  );
};

export default Movies;