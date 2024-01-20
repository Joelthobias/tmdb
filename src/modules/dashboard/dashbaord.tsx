import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SearchBar from '../app/componets/serachbar/serachbar';
import { Navbar } from '../app/componets/navbar/navbar';
import style from './dashbaord.module.css'; 
import { fetchTrendingMovies } from './services/fetchMovies';
import Cards from './components/cards';
import Searchbar from './components/search/serach';

interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    vote_average: number;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Dashboard: React.FC = () => {
    const handleSearch = (query: string) => {
        console.log('Dashboard: Search for:', query);
    };

    const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <></>,
    };
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

    return (
        <div className={style.main}>
            <Navbar />

            {Array.isArray(trendingMovies) && trendingMovies.length > 0 ? (
                <Slider {...settings}>
                    {trendingMovies.map((movie) => (
                        <div key={movie.id} className={style.slideContainer}>
                            <img
                                src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
                                alt={movie.title}
                            />
                            <div className={style.titleCard}>
                                <h2>{movie.title}</h2>
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <p>No trending movies available</p>
            )}

            <Searchbar  />
        </div>
    );
};

export default Dashboard;
