# Real-Time Chat App

A full-stack real-time chat application built with **React**, **Node.js**, **Express**, **Socket.io**, and **SQLite**. Includes JWT-based authentication, live typing indicators, an online-users list, and persisted message history.

## Features
- User registration & login (bcrypt-hashed passwords, JWT auth)
- Real-time messaging via WebSockets (Socket.io)
- Live "user is typing..." indicator
- Online users list, updated live
- Message history persisted in SQLite and loaded on join
- Socket connections authenticated with JWT (not just REST routes)

## Tech Stack
- **Frontend:** React 18 + Vite, socket.io-client
- **Backend:** Node.js, Express, Socket.io, better-sqlite3, jsonwebtoken, bcryptjs

---

## 1. What to install on your PC

You only need **one thing** installed globally:

- **Node.js** (v18 or newer, which includes npm) — download from https://nodejs.org

Check it's installed:
```bash
node -v
npm -v
```

Everything else (Express, Socket.io, React, etc.) is a project dependency and gets installed automatically by `npm install` — no global installs needed. SQLite is file-based, so there's no database server to install either.

---

## 2. Project setup

### Backend
```bash
cd server
npm install
cp .env.example .env
npm run dev
```
The server starts on **http://localhost:4000**. It will auto-create a `chat.db` SQLite file on first run.

`.env` contents (already filled from `.env.example`, edit `JWT_SECRET` for anything real):
```
PORT=4000
JWT_SECRET=change_this_to_a_long_random_string
CLIENT_URL=http://localhost:5173
```

### Frontend
Open a **second terminal**:
```bash
cd client
npm install
npm run dev
```
The app starts on **http://localhost:5173**.

Open that URL in two different browser tabs (or one normal + one incognito) and sign up as two different users to see real-time chat in action.

---

## 3. How it works (for your CV / interview talking points)

- **Auth flow:** Register/login hit REST endpoints (`/api/auth/register`, `/api/auth/login`) which return a JWT. The frontend stores it in `sessionStorage`.
- **Socket auth:** The JWT is sent in the Socket.io handshake (`io(url, { auth: { token } })`). A server-side `io.use()` middleware verifies it before allowing the connection — unauthenticated sockets are rejected.
- **State management:** React state + `useEffect` manage socket lifecycle (connect on mount, disconnect on unmount), message list, online users, and typing status.
- **Persistence:** Messages are stored in SQLite and the last 50 are replayed to a user when they join, so history isn't lost on refresh.

## 4. Ideas to extend it (good for showing growth in an interview)
- Multiple chat rooms/channels instead of one global room
- Direct (1:1) messages
- Message read receipts
- Image/file sharing
- Deploy backend on Railway/Render and frontend on Vercel, then link a live demo on your CV
- Add tests (Jest/Vitest + Supertest for the API)

## 5. Deploying
- **Backend:** Railway, Render, or Fly.io (needs a persistent disk for the SQLite file, or swap to Postgres for production)
- **Frontend:** Vercel or Netlify — remember to update `API_URL` and `SOCKET_URL` in the client to your deployed backend URL
