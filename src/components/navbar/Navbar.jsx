import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-left navbar-logo">Claw</div>
        <div className="navbar-middle">
          <p className="p1">Home</p>
          <p  className="p2">How it works</p>
          <p className="p3">Testimonials</p>
        </div>
        <div className="navbar-right">Register as a CA/Lawyer</div>
      </div>
    </>
  );
}
