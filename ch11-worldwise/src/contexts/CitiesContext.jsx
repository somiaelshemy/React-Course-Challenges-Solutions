import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";
const citiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      setIsLoading(true);
      try {
        fetch(`${BASE_URL}/cities`)
          .then((res) => res.json())
          .then((data) => setCities(data));
      } catch (err) {
        alert("There was an error loading data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <citiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </citiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(citiesContext);
  if (!context)
    throw new Error(
      "Cities Context is used outside the cities provider, cannot access"
    );
  return context;
}

export { CitiesProvider, useCities };
