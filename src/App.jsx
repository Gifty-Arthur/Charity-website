import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavFoot from "./components/Layout/NavFoot";
import Home from "./components/Home/Home";
import { urls } from "./components/Helpers/routes";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavFoot />}>
          <Route path="/" element={<Home />} />

          <Route path={urls.about} element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
