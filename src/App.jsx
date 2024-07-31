import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavFoot from "./components/Layout/NavFoot";
import Home from "./components/Home/Home";
import { urls } from "./components/Helpers/routes";
import About from "./components/About/About";
import Volunteer from "./components/Pages/Volunteer";
import Causes from "./components/Pages/Causes";
import Team from "./components/Pages/Team";
import Project from "./components/Pages/Project";
import Event from "./components/Pages/Event";
import Contact from "./components/Pages/Contact";
import Found from "./components/Pages/Found";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavFoot />}>
          <Route path="/" element={<Home />} />

          <Route path={urls.about} element={<About />} />
          <Route path={urls.volunteer} element={<Volunteer />} />
          <Route path={urls.causes} element={<Causes />} />
          <Route path={urls.team} element={<Team />} />
          <Route path={urls.project} element={<Project />} />
          <Route path={urls.event} element={<Event />} />
          <Route path={urls.contact} element={<Contact />} />
          <Route path={urls.found} element={<Found />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
