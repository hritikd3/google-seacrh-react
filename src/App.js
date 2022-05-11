import "./styles.css";
import { Header } from "./components";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element="" />
        </Routes>

        <Routes>
          <Route path="/home" element="" />
        </Routes>
      </Router>
    </div>
  );
}
