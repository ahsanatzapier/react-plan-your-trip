const Home = () => {
  return (
    <div>
      <section class="hero is-fullheight has-background">
        <img
          className="hero-background is-transparent"
          src="https://img.freepik.com/free-vector/hand-drawn-colorful-travel-background_23-2149033528.jpg?w=2000&t=st=1662274242~exp=1662274842~hmac=2f9697991a669f234649d3786b0a1a1eec44e3178cb2b9273329035a231ac519"
        />
        <div class="hero-head">
          <header class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  {/* <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"> */}
                </a>
                <span class="navbar-burger" data-target="navbarMenuHeroC">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroC" class="navbar-menu">
                <div class="navbar-end">
                  {/* <a class="navbar-item is-active">Home</a>
                  <a class="navbar-item">Examples</a>
                  <a class="navbar-item">Documentation</a> */}
                  <span class="navbar-item">
                    <form>
                      <div className="field has-addons mr-2">
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
                      </div>
                    </form>
                    <a class="button is-dark is-large">
                      <span>Take Off</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">Title</p>
            <p class="subtitle">Subtitle</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
