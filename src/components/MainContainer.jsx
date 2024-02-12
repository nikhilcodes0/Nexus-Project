import { Container } from "@mui/material"
import appBackground from "../assets/backgroundImage.png"

const mainContainerStyle = {
  display: "flex",
  flexDirection: "row",
  minHeight: "100vh",
  backgroundImage: `url(${appBackground})`,
  backgroundSize: "cover",
  backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust the alpha value as needed
  overflowX: "hidden",
  padding: "0px !important",
}

export default function MainContainer({ children }) {
  return (
    <Container sx={mainContainerStyle} maxWidth={false}>
      {children}
    </Container>
  )
}
