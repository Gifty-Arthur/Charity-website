import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavFoot from "./components/Layout/NavFoot";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavFoot />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
