import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";
function CountryList() {
  const { cities } = useCities();

  const countries = cities.reduce((array, city) => {
    if (!array.map((el) => el.country).includes(city.country)) {
      return [...array, { country: city.country, emoji: city.emoji }];
    } else {
      return array;
    }
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((el) => (
        <CountryItem country={el} />
      ))}
    </ul>
  );
}

export default CountryList;
