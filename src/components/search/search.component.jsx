import "./search.styles.css";
import { useState, useEffect } from "react";

const defaultFromFields = {
  search: "",
};

const Search = () => {
  const [formFields, setFormFields] = useState(defaultFromFields);
  const [searchString, setSearchString] = useState("");
  const [fsPlaces, setFsPlaces] = useState([]);

  const { search } = formFields;
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchString(search);
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

  useEffect(() => {
    const endpoint = `https://api.foursquare.com/v3/places/search?near=${searchString}&limit=10`;

    fetch(endpoint, fourSquareOptions)
      .then((response) => response.json())
      .then((places) => {
        setFsPlaces(places.results);
        console.log(fsPlaces);

        // setSearchUpdated(true);
      })
      .catch(() => {
        console.log("Unable to fetch locations");
      });
  }, [searchString]);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Where are you headed?</label>

          <input
            className="input has-text-centered"
            type="text"
            placeholder="ex. Edmonton"
            onChange={handleChange}
            name="search"
            value={search}
            required
          />
        </div>
      </form>
      {fsPlaces.map((places) => {
        return (
          <div key={places.fsq_id}>
            <div className="container">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">{places.name}</p>
                  <button class="card-header-icon" aria-label="more options">
                    <span class="icon">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </header>
                <div class="card-content">
                  <div class="content">{places.location.formatted_address}</div>
                </div>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item">
                    Save
                  </a>
                  <a href="#" class="card-footer-item">
                    Edit
                  </a>
                  <a href="#" class="card-footer-item">
                    Delete
                  </a>
                </footer>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Search;
