import "bulma/css/bulma.min.css";
import { Routes, Route } from "react-router-dom";

import Welcome from "./routes/welcome/welcome.component";
import Home from "./routes/home/home.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
