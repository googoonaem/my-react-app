import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Movie_detail.module.css';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const API_URL = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
  const getMovie = async () => {
    const json = await (await fetch(API_URL)).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <div className={styles.movieDetail}>
          <div
            className={styles.header}
            style={{
              backgroundImage: `url(${movie.background_image})`,
            }}
          >
            <h1 className={styles.title}>{movie.title_long}</h1>
          </div>
          <div className={styles.content}>
            <img
              className={styles.coverImage}
              src={movie.medium_cover_image}
              alt={movie.title}
            />
            <div className={styles.info}>
              <p className={styles.description}>
                {movie.description_intro}
              </p>
              <ul className={styles.details}>
                <li>
                  <strong>Genres:</strong> {movie.genres.join(', ')}
                </li>
                <li>
                  <strong>Rating:</strong> {movie.rating}
                </li>
                <li>
                  <strong>Year:</strong> {movie.year}
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer}>
            <a
              className={styles.button}
              href={movie.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on YTS
            </a>
            <a
              className={styles.button}
              href={`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Trailer
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
