function Dashboard() {
  return (
    <div style={{ padding: "60px" }}>
      <h2>📊 Dashboard</h2>
      <p>Welcome to ConfidantAI.</p>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
