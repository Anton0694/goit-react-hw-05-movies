import { useSearchParams } from "react-router-dom";
import { MovieList } from "../../components/MovieList/MovieList"
/* import { SearchBox } from "../../components/SearchBox/SearchBox"; */
import { getMovieName } from "../../API";
import { useEffect, useState } from "react";
import { Wrapper, SearchFormBtn, Icon, Form, SearchFormInput } from "../../pages/Movies/Movies.styled";

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  
  const movieName = searchParams.get("name");

  const onHandleSubmit = (event) => {
    const { value } = event.target.name
    event.preventDefault();
    
    setSearchParams(value === "" ? {} : { name: value })
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }
    getMovieName(movieName).then(data => setMovies(data.data.results))
  }, [movieName]);
  

  return (
    <>
      <Wrapper>
      
      <Form onSubmit={onHandleSubmit}>
          <SearchFormInput
            defaultValue={movieName}
            name="name"
            type="text"
            autoComplete="off"
            autoFocus
          />
          <SearchFormBtn type='submit'>
            <Icon size='2em'/>
          </SearchFormBtn>
      </Form>
    </Wrapper>
      {(movieName) && <MovieList movies={movies}/>}
     
    </>
  );
};

export default Movies;