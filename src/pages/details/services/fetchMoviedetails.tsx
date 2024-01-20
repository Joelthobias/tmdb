// src/services/movieApi.ts
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDQwYjQ2ZDhhZjE1NGQ4N2ZjNTdhNzk3MjM4YjA0OCIsInN1YiI6IjY1OTkxOTMwN2Q1NTA0MDIwMzBhYjNkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gSZPFGGgFP5Xnu1VmcAFAWYbzOCh_ZkCB-9-LXeiv-Y'; // Replace with your actual TMDB API key

export const fetchMovieDetails = async (movieId: string | number) => {
    try {
        console.log("Api call to fetchMovieDetails");
        const url = `${BASE_URL}/movie/${movieId}?language=en-US`;
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Error fetching movie details. Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw new Error('Error fetching movie details');
    }
};
