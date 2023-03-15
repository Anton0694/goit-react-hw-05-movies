import axios from 'axios';

const API_KEY = '0c6df8fcb0cf1f0f5728a6c0564c7c5a'
const baseURL = 'https://api.themoviedb.org'

export const getMovieById = (id) => {
    return axios.get(`${baseURL}/3/movie/${id}?api_key=${API_KEY}`)
}

export const getTrandingMovies = () => {
return axios.get(`${baseURL}/3/trending/all/day?api_key=${API_KEY}`)
}



