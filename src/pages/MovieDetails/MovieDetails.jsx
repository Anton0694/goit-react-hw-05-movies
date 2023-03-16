import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { BackLink } from "../../components/BackLink/BackLink";
import { getMovieById } from "../../API";
import { useEffect, useState } from "react";
import { BASE_IMG_URL } from "../../API";
import {AditInfo, MovieContainer, MovieImgBox, MovieInfoBox} from "./MovieDetails.styled"

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
 const [responseData, setResponseData] = useState(null)  


  useEffect(() => {
 
    const fetchData = async () => {
      const responseData = await getMovieById(movieId)
      setResponseData(responseData.data);
    }
fetchData()
  }, [movieId])

  if (responseData === null) {
    return
  }
  console.log(responseData)

  
  const backLinkHref = location.state?.from ?? "/movies";
  const getGenresString = responseData.genres.map(genre => genre.name).join(' ');
  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
     
      <MovieContainer>
        <MovieImgBox>
          <img src={`${BASE_IMG_URL}${responseData.poster_path}`} alt="" />
        </MovieImgBox>
        <MovieInfoBox>
          <h2>
          {responseData.title}
          </h2>
          <h3>Overview</h3>
          <p>
          {responseData.overview}
          </p>
          <h3>Genres</h3>
          <p>
            {getGenresString}
          </p>
          </MovieInfoBox>
      </MovieContainer>
      <h3>Aditional information</h3>
      <AditInfo>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </AditInfo>
      <Outlet />
    </main>
  );
};

export default MovieDetails;