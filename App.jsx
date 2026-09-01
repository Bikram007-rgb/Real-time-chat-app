import { useState } from "react";
import Login from "./components/Login.jsx";
import Chat from "./components/Chat.jsx";

export default function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token") || null);
  const [username, setUsername] = useState(sessionStorage.getItem("username") || null);

  function handleAuth(newToken, newUsername) {
    sessionStorage.setItem("token", newToken);
    sessionStorage.setItem("username", newUsername);
    setToken(newToken);
    setUsername(newUsername);
  }

  function handleLogout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    setToken(null);
    setUsername(null);
  }

  if (!token) return <Login onAuth={handleAuth} />;
  return <Chat token={token} username={username} onLogout={handleLogout} />;
}
