import "./welcome.styles.css";
import { useContext, useState } from "react";
import { TripTokenContext } from "../../contexts/triptoken/triptoken.context";
import { PlacesContext } from "../../contexts/places/places.context";
import { useNavigate } from "react-router-dom";
import {
  createPlacesArrayForToken,
  getPlacesArrayForToken,
} from "../../utils/firebase.utils";

const defaultFormField = {
  token: "",
};

const errorFormField = {
  token: "Invalid Token",
};

const Welcome = () => {
  const navigate = useNavigate();
  const { setTripToken } = useContext(TripTokenContext);
  const { setPlaces } = useContext(PlacesContext);
  const [formField, setFormField] = useState(defaultFormField);
  const { token } = formField;
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const newTripHandler = async () => {
    const token = Date.now();
    await createPlacesArrayForToken(token);
    const places = await getPlacesArrayForToken(token);
    if (places) {
      setTripToken(token);
      setPlaces(places.places);
      navigate("/home");
    }

    // setTripToken(token);
    // setPlaces(places.places);
    // navigate("/home");
  };

  const resetFormField = () => {
    setFormField(defaultFormField);
  };

  const showErrorFormField = () => {
    setFormField(errorFormField);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = event.target.token.value;
    // console.log("handleSubmit", token);
    const places = await getPlacesArrayForToken(token);
    if (!places) {
      showErrorFormField();
      await delay(1000);
      resetFormField();
      return;
    }
    setTripToken(token);
    setPlaces(places.places);
    navigate("/home");
  };

  return (
    <div>
      <div className="hero is-fullheight has-background">
        <img
          className="hero-background is-transparent"
          alt="hero-background"
          src="https://img.freepik.com/free-vector/watercolor-background-with-travel-doodles_79603-1832.jpg?w=1800&t=st=1662271496~exp=1662272096~hmac=96c44d167aa1bbd9584518b9f957d6700b084ec305ba9f8343e5a693ff646850"
        />
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered is-centered">
              <div className="column is-narrow has-text-centered">
                <header className="SectionHeader">
                  <h1 className="title is-2 is-size-3-mobile is-spaced welcome-title mb-5">
                    Plan Your Trip
                  </h1>

                  <h1 className="title is-5 is-size-5-mobile is-spaced welcome-subtitle mb-0">
                    A New Trip
                  </h1>

                  {/* <Link to="/"> */}
                  <div className="buttons is-inline-flex mt-5">
                    <button onClick={newTripHandler} className="button is-link">
                      Start A New Trip
                    </button>
                  </div>

                  <h1 className="title is-5 is-size-5-mobile is-spaced welcome-subtitle mb-5">
                    An Existing Trip
                  </h1>

                  <form onSubmit={handleSubmit}>
                    <div className="field has-addons ">
                      <p className="control">
                        <span className="button is-static">Trip Token</span>
                      </p>
                      <div className="control is-expanded">
                        <input
                          className="input has-text-centered"
                          type="text"
                          onChange={handleChange}
                          name="token"
                          value={token}
                          required
                        />
                      </div>
                      <div className="control">
                        <button type="submit" className="button is-link">
                          Return To My Trip
                        </button>
                      </div>
                    </div>
                  </form>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
