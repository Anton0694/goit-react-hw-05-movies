import { useSearchParams } from "react-router-dom";
import { MovieList } from "../components/MovieList/MovieList"
import { SearchBox } from "../components/SearchBox/SearchBox";
import { getMovieById } from "../API";
import { useEffect, useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  
  const movieName = searchParams.get("name") ?? "";


  useEffect(() => {
   if (!movieName) {
    return;
  }
   getMovieById(movieName).then(({ data }) => setMovies(data.result))
}, [movieName])
  

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
    
  };

  return (
    <>
      <SearchBox value={movieName} onChange={updateQueryString} />
      {/* <MovieList movies={movies} /> */}
    </>
  );
};

export default Movies;