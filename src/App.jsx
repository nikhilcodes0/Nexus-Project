import "./App.css"
import { useState, useEffect } from "react"
import Login from "./pages/Login"
import Homepage from "./pages/Homepage"
import { app } from "./firebase"
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"

function App() {
  const storedUser = JSON.parse(sessionStorage.getItem("user"))

  // Currently logged in user
  const [currentUser, setCurrentUser] = useState(storedUser)

  // Run this effect on component mount
  useEffect(function () {
    const auth = getAuth(app)
    onAuthStateChanged(auth, (user) => {
      // user ? setUser(user) : setUser(null)
      console.log(user)
    })
  }, [])

  // If the user is logged in, set home as the page, else set login as the page
  const page = currentUser.uid ? <Homepage /> : <Login />
  return <div className="App">{page}</div>
}

export default App
