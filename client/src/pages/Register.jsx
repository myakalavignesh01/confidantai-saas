import { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleRegister = async () => {
    await registerUser(form);
    navigate("/");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input placeholder="Password" type="password" onChange={e => setForm({...form, password: e.target.value})} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
