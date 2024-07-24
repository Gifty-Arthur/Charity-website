import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavFoot from "./components/Layout/NavFoot";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavFoot />} />
      </Routes>
    </div>
  );
}

export default App;
