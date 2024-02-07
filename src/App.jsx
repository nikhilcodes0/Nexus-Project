import "./App.css"
import { useState, useEffect } from "react"
import Login from "./pages/Login"
import Homepage from "./pages/Homepage"
import { app } from "./firebase"
import { useNavigate } from "react-router-dom"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { Container } from "@mui/material"

function App() {
  // Currently logged in user
  const storedUser = JSON.parse(sessionStorage.getItem("user"))
  const [currentUser, setCurrentUser] = useState(storedUser)

  // Use for navigation
  const navigator = useNavigate()

  // Run this effect on component mount
  useEffect(() => {
    if (!currentUser?.uid) navigator("/login")
  }, [])

  const auth = getAuth(app)
  onAuthStateChanged(auth, (user) => setCurrentUser(user))

  return (
    <Container className="App">
      {/* If the user is logged in, show homepage, else show login page */}
      {currentUser ? <Homepage /> : <Login />}

    </Container>
  )
}

export default App
