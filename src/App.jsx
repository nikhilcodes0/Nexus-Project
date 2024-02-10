import { useState } from "react"
import { auth } from "./firebase"
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { Container } from "@mui/material"

import Sidebar from "./components/Sidebar"
import Homepage from "./pages/Homepage"

import appBackground from "./assets/backgroundImage.png"

const mainContainerStyle = {
  display: "flex",
  flexDirection: "row",
  height: "100vh",
  backgroundImage: `url(${appBackground})`,
  backgroundSize: "cover",
  backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust the alpha value as needed
  overflowX: "hidden",
  padding: "0px !important",
}

function App() {
  // Use for navigation
  const navigator = useNavigate()

  const [currentUser, setCurrentUser] = useState(auth.currentUser)

  onAuthStateChanged(auth, (user) => setCurrentUser(user))

  return (
    <Container sx={mainContainerStyle} maxWidth={false}>
      {/* <Sidebar /> */}
      <Homepage />
    </Container>
  )
}

export default App
