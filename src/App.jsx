import { useState } from "react"
import { auth } from "./firebase"
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
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

  onAuthStateChanged(auth, (user) => setCurrentUser(user))

  return (
    <mainContainer>
      <Homepage />
    </mainContainer>
  )
}

export default App
