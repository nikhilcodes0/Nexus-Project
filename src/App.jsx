import "./App.css"
import { useState, useEffect } from "react"
import Login from "./pages/Login"
import Homepage from "./pages/Homepage"
import { app, auth } from "./firebase"
import { useNavigate } from "react-router-dom"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { Container } from "@mui/material"
import { Navigate } from "react-router-dom"
import { Home } from "@mui/icons-material"

function App() {
  // Use for navigation
  const navigator = useNavigate()

  const [currentUser, setCurrentUser] = useState(auth.currentUser)
  console.log(currentUser)

  // useEffect(() => {
  //   if (!currentUser) navigator("/login")
  // }, [])

  onAuthStateChanged(auth, (user) => setCurrentUser(user))

  return (
    <Container>
      <Homepage />
    </Container>
  )
}

export default App
