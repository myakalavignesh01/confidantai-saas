import { useState } from "react";

function App() {
  const [response, setResponse] = useState("");

  const callBackend = async () => {
    const res = await fetch(
      import.meta.env.VITE_API_URL + "/api/test"
    );
    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>🚀 ConfidantAI</h1>
      <button onClick={callBackend}>
        Test Backend Connection
      </button>
      <p>{response}</p>
    </div>
  );
}

export default App;
