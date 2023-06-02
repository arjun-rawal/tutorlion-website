import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">TutorLion</div>
        <ul className="navbar-links">
          <li className="navbar-link">
            <Link href="/home">
              <p>Home</p>
            </Link>
          </li>
          <li className="navbar-link">
            <Link href="/about">
              <p>About Us</p>
            </Link>
          </li>
          <li className="navbar-link">
            <Link href="/tutors">
              <p>Our Tutors</p>
            </Link>
          </li>
          <li className="navbar-link">
            <Link href="/contact">
              <p>Contact</p>
            </Link>
          </li>
          <li className="navbar-link">
            <Link href="/resources">
              <p>Resources</p>
            </Link>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          background-color: #BA797D;
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
          padding: 10px 20px; 
        }

        .navbar-brand {
          font-family: "Arial", sans-serif;
          font-size: 24px;
          color: white;
        }

        .navbar-links {
          display: flex;
          list-style-type: none;
          text-decoration: none;
        }

        .navbar-link {
          margin-left: 20px;
          color: white;
          position: relative;
          cursor: pointer;
        }

        .navbar-link p {
          color: #002244;
          text-decoration: none;
          padding: 8px 12px; 
          margin: 0;
          font-weight: bold;
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
      `}</style>
    </nav>
  );
};

export default Navbar;
