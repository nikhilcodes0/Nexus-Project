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
import { styled } from '@mui/material/styles';


const mainContainer = styled(Container)`
  & @media (min-width: 1200px) {
    & .MuiContainer-root {
      max-width: 100%;
    }
  }
`;


function App() {
  // Use for navigation
  const navigator = useNavigate()

  const [currentUser, setCurrentUser] = useState(auth.currentUser)

  useEffect(() => {
    if (!currentUser) navigator("/login")
  }, [])

  onAuthStateChanged(auth, (user) => setCurrentUser(user))

  return (
    <mainContainer>
      <Homepage />
    </mainContainer>
  )
}

export default App
