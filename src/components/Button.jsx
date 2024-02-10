import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"

const ThemedButton = styled(Button)({
  backgroundColor: "#008080",
  color: "white",
  fontSize: "1rem",
  fontFamily: "Montserrat",
  "&:hover": {
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    backgroundColor: "#046666",
  },
})

export default ThemedButton
