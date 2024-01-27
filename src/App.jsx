import { useState } from "react"
import "./App.css"
import { Button } from "@mui/material"

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Button variant="outlined" endIcon={<AutoAwesomeIcon  />}>
      Hello Nexus
    </Button>
  )
}

export default App
