import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

function CityItem({ city }) {
  function formatDate(date) {
    return new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  }

  return (
    <Link
      to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      className={styles.cityItem}
    >
      <span className={styles.emoji}>{city.emoji}</span>
      <p className={styles.name}>{city.cityName}</p>
      <p className={styles.date}>{formatDate(city.date)}</p>
      <button className={styles.deleteBtn}>x</button>
    </Link>
  );
}

export default CityItem;
