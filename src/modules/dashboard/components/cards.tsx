import style from './cards.module.css'; 
import { useRouter } from 'next/router'
const router = useRouter()
interface Media {
  id: number;
  title: string;
  vote_average: string;
  poster_path: string;
}
interface CardsProps {
    movieData: Media[] | null;
}
 function Cards({movieData}: CardsProps){
    const handleOnlcik = (id:number) => {
        router.push(`/movie/${id}`)   
    }
        return (    
            <div className={style.cards}>
                {movieData && movieData.length > 0 ? (
                    movieData.map((movie) => (
                        <div className={style.card} onClick={handleOnlcik(movie.id)} key={movie.id}>
                            <img alt={movie.title}
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
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
        )
}
export default Cards;