import { createContext, useState } from "react";

export const TripTokenContext = createContext({
  tripToken: null,
  setTripToken: () => null,
});

export const TripTokenProvider = ({ children }) => {
  const [tripToken, setTripToken] = useState(0);

  const value = {
    tripToken,
    setTripToken,
  };

  return (
    <TripTokenContext.Provider value={value}>
      {children}
    </TripTokenContext.Provider>
  );
};
