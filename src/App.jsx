import "./App.css"
import { useState, useEffect } from "react"
import Login from "./pages/Login"
import Homepage from "./pages/Homepage"
import { app } from "./firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth"

function App() {
  const storedUser = JSON.parse(localStorage.getItem("user"))
  let uidState = false
  // Currently logged in user
  const [currentUser, setCurrentUser] = useState(storedUser)

  // Run this effect on component mount
  useEffect(function () {
    const auth = getAuth(app)
    onAuthStateChanged(auth, (user) => {
      // user ? setUser(user) : setUser(null)
      uidState= currentUser.uid
      console.log(uidState)
      // uidState = currentUser.uid
    })
  }, [])

  // If the user is logged in, set home as the page, else set login as the page
  const page = storedUser ? <Homepage /> : <Login />
  return <div className="App">{page}</div>
}

export default App
