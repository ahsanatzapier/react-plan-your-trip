import "./search.styles.css";
import { useState } from "react";
import PlacesContainer from "../places-container/places-container.component";

const defaultFromFields = {
  search: "",
};

const Search = () => {
  const [formFields, setFormFields] = useState(defaultFromFields);
  const [fsPlaces, setFsPlaces] = useState([]);

  const { search } = formFields;
  const handleSubmit = async (event) => {
    event.preventDefault();
    getPlaces(search);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const fourSquareOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "fsq3Nn7nSxTJMvHyYBDgQKNHNFKD+E1J+ZD5cI/jt24fo1M=",
    },
  };

  const getPlaces = (search) => {
    const endpoint = `https://api.foursquare.com/v3/places/search?near=${search}&limit=4`;

    fetch(endpoint, fourSquareOptions)
      .then((response) => response.json())
      .then((places) => {
        setFsPlaces(places.results);
        // console.log(fsPlaces);
        // setSearchUpdated(true);
      })
      .catch(() => {
        console.log("Unable to fetch locations");
      });

    fetch(endpoint, fourSquareOptions)
      .then((response) => response.json())
      .then((places) => {
        setFsPlaces(places.results);
        // console.log(fsPlaces);
        // setSearchUpdated(true);
      })
      .catch(() => {
        console.log("Unable to fetch locations");
      });
  };

  // console.log(fsPlaces);

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Where are you headed?</label>

          <input
            className="input"
            type="text"
            placeholder="ex. Edmonton"
            onChange={handleChange}
            name="search"
            value={search}
            required
          />
        </div>
      </form>
      <br></br>

      {fsPlaces.length !== 0 && <PlacesContainer fsPlaces={fsPlaces} />}
      <br></br>

      <div className="box has-background-dark p-4">
        <div className="container has-text-centered"></div>
        <h1 className="title is-5 is-size-5-mobile is-spaced welcome-subtitle mb-0 has-text-centered has-text-white">
          Your Trip
        </h1>
      </div>
    </div>
  );
};

export default Search;
