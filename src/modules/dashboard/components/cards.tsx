import { useRouter } from 'next/router';
import style from './cards.module.css';

interface Media {
    id: number;
    title: string;
    vote_average: string;
    poster_path: string;
}

interface CardsProps {
    movieData: Media[] | null;
}

function Cards({ movieData }: CardsProps) {
    const router = useRouter();

    const handleOnClick = (id: number) => {
        router.push('/movie/[id]', `/movie/${id}`);
    };

    return (
        <div className={style.cards}>
            {movieData && movieData.length > 0 ? (
                movieData.map((movie) => (
                    <div
                        className={style.card}
                        onClick={() => handleOnClick(movie.id)}  // Pass a function reference
                        key={movie.id}
                    >
                        <img
                            alt={movie.title}
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        />
                        <div className={style.cardbody}>
                            <h3>{movie.title}</h3>
                            <p>Rating : {movie.vote_average}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No movie data available</p>
            )}
        </div>
    );
}

export default Cards;
