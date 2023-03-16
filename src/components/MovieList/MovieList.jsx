

import {Links} from "./MovieList.styled"

export const MovieList = ({ movies }) => {
  /* const location = useLocation(); */

  return (
   <ul>
        {movies.map((film) => <Links to={`/movies/:${film.id}`} key={film.id}>{film.title ?? film.name}        
        </Links>)}
     </ul>
      
      
  );
};