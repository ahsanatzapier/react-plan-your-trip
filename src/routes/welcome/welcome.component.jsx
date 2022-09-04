import "./welcome.styles.css";

const Welcome = () => {
  const newTripHandler = () => {
    console.log("New Trip Started");
    // create a token with 3 random cities
    // store the token into a context
    // create a new trip on firebase with the new token, it should be an array.
    // once this is all done, navigate the user to the home screen.
  };
  return (
    <div>
      <div className="hero is-fullheight has-background">
        <img
          className="hero-background is-transparent"
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

                  <form>
                    <div className="field has-addons ">
                      <p class="control">
                        <a class="button is-static">Trip Token</a>
                      </p>

                      <div className="control is-expanded">
                        <input
                          className="input"
                          type="text"
                          placeholder="ex. Vancouver"
                          // onChange={changeHandler}
                          name="search"
                          // value={search}
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

                  {/* </Link> */}
                  {/* <h1 className="title is-3 is-size-3-mobile is-spaced mb-0">
                    but you might be.
                  </h1> */}
                </header>
                {/* <Link to="/">
                  <div className="buttons is-inline-flex mt-5">
                    <button className="button is-link is-medium">
                      Go Home
                    </button>
                  </div>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

// https://fonts.googleapis.com/css2?family=Lemon&display=swap
