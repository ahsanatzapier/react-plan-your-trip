import { createContext, useState } from "react";

export const PlacesContext = createContext({
  places: null,
  setPlaces: () => null,
});

export const PlacesProvider = ({ children }) => {
  const [places, setPlaces] = useState([]);

  const value = {
    places,
    setPlaces,
  };

  return (
    <PlacesContext.Provider value={value}>{children}</PlacesContext.Provider>
  );
};
