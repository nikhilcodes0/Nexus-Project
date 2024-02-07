import { auth } from "../firebase"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"

import "../Style/homepage.css"
import ill1 from "../components/assets/ill1.svg"

function Homepage() {
  const navigator = useNavigate()
  // Check if user is logged in when component mounts
  // If the user is not authenticated, go to /login
  useEffect(() => {
    if (!auth.currentUser?.uid) navigator("/login")
  }, [])

  return (
    <>
      <Sidebar />
      <div className="mainhome">
        <div className="header">
          <div className="caption"></div>
          <div className="illustration">
            <img src={ill1} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
