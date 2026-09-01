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

The app starts on **http://localhost:5173**.

Open that URL in two different browser tabs (or one normal + one incognito) and sign up as two different users to see real-time chat in action.

---

