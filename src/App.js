import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2> editing to see some magic happen!</h2>

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
