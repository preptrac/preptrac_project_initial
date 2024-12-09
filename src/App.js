import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Syllabus from "./pages/Syllabus";
import Tests from "./pages/Tests";
import Counseling from "./pages/Counseling";

const NotFound = () => <h1>404 - Page Not Found</h1>;

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/syllabus">Syllabus</Link></li>
            <li><Link to="/tests">Tests</Link></li>
            <li><Link to="/counseling">Counseling</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/counseling" element={<Counseling />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
