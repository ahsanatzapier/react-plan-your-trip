import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { TripTokenContext } from "../../contexts/triptoken/triptoken.context";

const Home = () => {
  const { tripToken, setTripToken } = useContext(TripTokenContext);
  const [copyState, setCopyState] = useState("Copy");
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
          src="https://img.freepik.com/free-vector/road-desert-scenery-landscape-with-rocks-cracked-dry-ground-straight-empty-highway-arizona-grand-canyon-asphalted-way-disappear-into-distance-deserted-land-cartoon-vector-illustration_107791-7878.jpg?w=2000&t=st=1662329681~exp=1662330281~hmac=13dbd1e7b5d3f49256be4bf7423b9e0b69db18ad2e2227203d8c33962eb27365"
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

        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Title</p>
            <p className="subtitle">Subtitle</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
