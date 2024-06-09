import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};
function Movie({ id, m_cover_img, title, summary, genres }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className={styles.movie}>
        <img
          className={styles.coverImage}
          src={m_cover_img}
          alt={title}
        />
        <div className={styles.details}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.summary}>
            {truncateText(summary, 90)}
          </p>
          <ul className={styles.genres}>
            {genres.map((genre, index) => (
              <li key={index} className={styles.genre}>
                {genre}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  m_cover_img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
