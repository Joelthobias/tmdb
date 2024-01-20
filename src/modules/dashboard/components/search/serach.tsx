import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/fetchMovies';
import Cards from '../cards';
import { searchMovies } from '../../services/serachMovies';
import style from './search.module.css';
interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    vote_average: number;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Searchbar: React.FC = () => {

    const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
    const [query, setQuery] = useState<string>('');
    const [serachResult, setSearchResult] = useState<Movie[]>([]);
    const [showSearchResult, setShowSearchResult] = useState<boolean>(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const movies = await fetchTrendingMovies();
                setTrendingMovies(movies);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    const handleSearch =async (query: string) => {   
        const result =await searchMovies(query);
        setSearchResult(result);    
        setShowSearchResult(true);
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch(query);
        }
    }

    return (
        <div className={"style"}>
            <input
                type="text"
                className={style.search}
                value={query}
                placeholder='Search for a movie'
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            {showSearchResult ? <Cards movieData={serachResult} /> : <Cards movieData={trendingMovies} />}
           

            
        </div>
    );
};

export default Searchbar;
