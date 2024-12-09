import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/syllabus">Syllabus</Link></li>
        <li><Link to="/tests">Tests</Link></li>
        <li><Link to="/counseling">Counseling</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
