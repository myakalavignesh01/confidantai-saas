import { useState } from "react";
import { sendMessage } from "../api";

export default function Dashboard() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const token = localStorage.getItem("token");

  const handleSend = async () => {
    const res = await sendMessage({ message }, token);
    setReply(res.data.reply);
  };

  return (
    <div>
      <h2>ConfidantAI</h2>
      <input value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={handleSend}>Send</button>
      <p>{reply}</p>
    </div>
  );
}
