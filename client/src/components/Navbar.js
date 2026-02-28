import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>ConfidantAI</h2>

      <div>
        {!token ? (
          <>
            <Link to="/login" style={styles.link}>
              Login
            </Link>
            <Link to="/register" style={styles.link}>
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" style={styles.link}>
              Dashboard
            </Link>
            <button onClick={handleLogout} style={styles.button}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#111",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  link: {
    marginRight: "15px",
    textDecoration: "none",
    color: "white",
  },
  button: {
    background: "red",
    border: "none",
    padding: "6px 12px",
    color: "white",
    cursor: "pointer",
  },
};

export default Navbar;
