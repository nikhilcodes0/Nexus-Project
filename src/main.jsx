import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import Login from "./pages/Login.jsx"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import "./index.css"

// Library and Css for toast notifications
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Donate from "./pages/Donate.jsx"
import Watching from "./pages/Watching.jsx"
import Profile from "./pages/Profile.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer autoClose={1500} />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/watching" element={<Watching />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
