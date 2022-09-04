import "bulma/css/bulma.min.css";

import Welcome from "./routes/welcome/welcome.component";
import Home from "./routes/home/home.component";

function App() {
  return (
    <div className="App">
      {/* <Welcome /> */}
      {<Home />}
    </div>
  );
}

export default App;
