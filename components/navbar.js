import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-brand">TutorLion</div>
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="menu-text">Menu</div>
          <div className="menu-icon">&#9776;</div>
        </div>
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li className="navbar-link">
            <Link style={{'text-decoration':'none'}}href="/home">
              <p>Home</p>
            </Link>
          </li>
          <li className="navbar-link">
            <Link style={{'text-decoration':'none'}}href="/about">
              <p>About Us</p>
            </Link>
          </li>
          <li className="navbar-link">
            <Link style={{'text-decoration':'none'}}href="/tutors">
              <p>Our Tutors</p>
            </Link>
          </li>
          <li className="navbar-link">
            <Link style={{'text-decoration':'none'}}href="/contact">
              <p>Contact</p>
            </Link>
          </li>
          <li className="navbar-link">
            <Link style={{'text-decoration':'none'}}href="/resources">
              <p>Resources</p>
            </Link>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          background-color: #e67220;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 20px;
        }

        .navbar-brand {
          font-family: "Arial", sans-serif;
          font-size: 24px;
          color: white;
        }

        .menu-toggle {
          display: none;
        }

        .menu-toggle.open {
          display: flex;
          align-items: center;
          margin-right: 20px;
          cursor: pointer;
          padding: 8px 12px;
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }

        .menu-text {
          color: white;
          font-size: 16px;
          margin-right: 5px;
        }

        .menu-icon {
          font-size: 20px;
          color: white;
        }

        .navbar-links {
          display: flex;
          list-style-type: none;
          text-decoration: none;
          transition: 0.3s;
        }

        .navbar-link {
          margin-left: 20px;
          color: white;
          position: relative;
          cursor: pointer;
        }

        .navbar-link p {
          color: 01468a;
          text-decoration: none;
          padding: 8px 12px;
          margin: 0;
          font-weight: bold;
          font-family: "Arial", sans-serif;
          font-size: 16px;
        }

        .navbar-link::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.2);
          opacity: 0;
          pointer-events: none;
          border-radius: 10px;
          transition: opacity 0.3s ease;
        }

        .navbar-link:hover::after {
          opacity: 1;
        }

        .navbar.open {
          height: auto;
        }

        .navbar.open .navbar-links {
          max-height: 300px;
        }

        .navbar-links.open {
          display: flex;
          flex-direction: column;
        }

        @media screen and (max-width: 800px) {
          .navbar-container {
            flex-wrap: wrap;
            justify-content: flex-end;
          }

          .navbar-brand {
            position: absolute;
            left: 1%;
            top: 44px;
          }

          .menu-toggle {
            margin-top: 17px;
            display: flex;
            align-items: center;
            margin-right: 20px;
            cursor: pointer;
            padding: 8px 12px;
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 10px;
          }

          .navbar-links {
            order: 1;
            width: 100%;
            max-height: 0;
            overflow: hidden;
            flex-direction: column;
            margin-top: 10px;
            background-color: a797#bd;
            border-radius: 10px;
          }

          .navbar-links.open {
            max-height: 300px;
            padding: 10px;
          }

          .navbar-link {
            margin: 10px 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
