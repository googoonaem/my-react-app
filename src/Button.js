import propTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ text }) {
  return <button className={styles.title}>{text}</button>;
}

Button.propTypes = {
  text: propTypes.string.isRequired,
};
