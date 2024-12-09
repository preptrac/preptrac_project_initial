import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Syllabus from "./pages/Syllabus";
import Tests from "./pages/Tests";
import Counseling from "./pages/Counseling";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/counseling" element={<Counseling />} />
      </Routes>
    </Router>
  );
}

export default App;
