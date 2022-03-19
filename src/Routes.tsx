import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { List } from "./components/List";
import { SignIn } from "./components/SignIn";
import { Description } from "./pages/Description";
import { Home } from "./pages/Home";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
}