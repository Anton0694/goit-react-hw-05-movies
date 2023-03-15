import axios from 'axios';

const API_KEY = '0c6df8fcb0cf1f0f5728a6c0564c7c5a'
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovieById = async id => {
    try {
        const response = await axios.get(
            `/movie/${id}?api_key=${API_KEY}`);
        return response;
    } catch (error) {
        console.log(error.message);
    }
};

export const getTrandingMovies = async () => {
     try {
        const response = await axios.get(
            `/trending/all/day?api_key=${API_KEY}`);
        return response;
    } catch (error) {
        console.log(error.message);
    }
};

export const getMovieName = async query => {
    try {
        const response = await axios.get(
            `/search/movie?api_key=${API_KEY}&page=1&query=${query}`);
        return response;
    } catch (error) {
        console.log(error.message);
    }
};

