import { Link } from "react-router-dom";

function Landing() {
  return (
    <div style={{ textAlign: "center", padding: "80px" }}>
      <h1>🚀 ConfidantAI</h1>
      <p>AI Interview Confidence Coach</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button style={{ marginLeft: "10px" }}>Register</button>
      </Link>
    </div>
  );
}

export default Landing;
