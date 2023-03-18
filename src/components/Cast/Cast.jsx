import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast, BASE_IMG_URL } from "../../API";



const Cast = () => {
const { movieId } = useParams();
  const [castData, setCastData] = useState(null)
  

  useEffect(() => {
  
    const fetchData = async () => {
   
      const castData = await getMovieCast(movieId)
      setCastData(castData.data);
    }
    fetchData()
  }, [movieId])

  

if (castData === null) {
    return
  } 

  
  return (
    
      <ul>
        {castData.cast.map(({ name, profile_path, character, id }) => (
          <li key={id}>
          {profile_path && (<img src={`${BASE_IMG_URL}${profile_path}`} alt="Actor Foto" />)}
               <p>{name}</p>
          <p>Characters: {character}</p> 
        </li>))}
   </ul>
          
  );
};

export default Cast;