import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:4000";

let socket = null;

// Create the connection lazily, once we have a token
export function connectSocket(token) {
  socket = io(SOCKET_URL, {
    auth: { token },
    autoConnect: true,
  });
  return socket;
}

export function getSocket() {
  return socket;
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}
