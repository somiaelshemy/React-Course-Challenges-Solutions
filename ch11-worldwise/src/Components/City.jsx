import { Navigate, useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useEffect, useState } from "react";
import Button from "./Button";

const BASE_URL = "http://localhost:8000";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const [cityName, setCityName] = useState(null);
  const [emoji, setEmoji] = useState(null);
  const [date, setDate] = useState(null);
  const [notes, setNotes] = useState(null);
  useEffect(
    function () {
      async function fetchCity() {
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();

        setCityName(data.cityName);
        setEmoji(data.emoji);
        setDate(data.date);
        setNotes(data.notes);
      }
      fetchCity();
    },
    [id]
  );

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <Button onClick={() => Navigate(-1)} type="back">
        back
      </Button>
    </div>
  );
}

export default City;
