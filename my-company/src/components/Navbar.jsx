import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "blue",
      padding: "10px",
      fontSize: "1.1rem"
    }}>
      <Link style={{color: "#fff", textDecoration: "none"}} to="/">Home</Link>
      <Link style={{color: "#fff", textDecoration: "none"}} to="/about">About</Link>
      <Link style={{color: "#fff", textDecoration: "none"}} to="/services">Services</Link>
      <Link style={{color: "#fff", textDecoration: "none"}} to="/contact">Contact</Link>
    </nav>
  );
}
