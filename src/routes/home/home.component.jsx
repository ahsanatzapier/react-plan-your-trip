import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { TripTokenContext } from "../../contexts/triptoken/triptoken.context";
import Search from "../../components/search/search.component";

const Home = () => {
  const { tripToken, setTripToken } = useContext(TripTokenContext);
  const [copyState, setCopyState] = useState("Copy");
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // useEffect(() => {
  //   const getPlaces = async () => {
  //     const places = await getPlacesArrayForToken(tripToken);
  //     console.log(places);
  //   };
  //   getPlaces();
  //   // console.log("useEffect", places);
  // }, []);

  // console.log(places);

  const copyHandler = async () => {
    navigator.clipboard.writeText(tripToken);
    setCopyState("Copied!");
    await delay(400);
    setCopyState("Copy");
  };
  return (
    <div>
      <section className="hero is-fullheight has-background">
        <img
          className="hero-background is-transparent"
          alt="hero-background"
          src="https://img.freepik.com/premium-vector/abstract-watercolor-cover_1034-2274.jpg?w=1380"
        />

        <div className="hero-head">
          <nav className="navbar is-transparent">
            <div className="navbar-brand">
              <div
                className="navbar-burger"
                data-target="navbarExampleTransparentExample"
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="field is-grouped">
                    <div className="control">
                      <div className="field has-addons ">
                        <p className="control">
                          <span className="button is-static">Trip Token</span>
                        </p>

                        <div className="control is-expanded">
                          <input
                            className="input has-text-centered"
                            type="text"
                            name="search"
                            defaultValue={tripToken}
                            readOnly="readonly"
                          />
                        </div>

                        <div className="control">
                          <button
                            onClick={copyHandler}
                            className="button is-link"
                          >
                            {copyState}
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="control">
                      <Link
                        className="button is-dark"
                        to="/"
                        onClick={() => {
                          setTripToken(null);
                        }}
                      >
                        <span>Take Off</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body is-align-items-stretch">
          <div className="container">
            <Search />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
