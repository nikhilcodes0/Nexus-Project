import { Link, NavLink, useNavigate } from "react-router-dom"

import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import { Box, Typography } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import VisibilityIcon from "@mui/icons-material/Visibility"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew"
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism"

import Logo from "../assets/Logo.png"
import "../Style/Sidebar.css"

export default function Sidebar() {
  const navigator = useNavigate()

  async function handleLogout() {
    await signOut(auth)
    navigator("/login")
  }

  return (
    <Box component="nav" className="sidebar">
      <Link to="/" style={{ display: "flex", justifyContent: "center" }}>
        <img src={Logo} className="sidebar-logo" />
      </Link>

      {/* Navbar links */}
      <Box sx={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
        <SidebarLink name="Home" location="/" icon={HomeIcon} />
        <SidebarLink name="Watching" location="/watching" icon={VisibilityIcon} />
        <SidebarLink name="Donate" location="/donate" icon={VolunteerActivismIcon} />
        <SidebarLink name="Profile" location="/profile" icon={AccountCircleIcon} />
      </Box>

      {/* Logout links */}
      <Box sx={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
        <SidebarLink name="About" location="/" icon={InfoIcon} />

        {/* Logout Button needs custom styling and we cant override the style outside the component definition */}
        <NavLink
          to={"/logout"}
          className="sidebar-link sidebar-link__logout"
          onClick={handleLogout}>
          <PowerSettingsNewIcon className="icon" />
          <Typography style={{ fontWeight: "500", fontSize: "1.5rem" }}>
            Logout
          </Typography>
        </NavLink>
      </Box>
    </Box>
  )
}

function SidebarLink({ name, location, icon: Icon }) {
  return (
    <NavLink to={location} className="sidebar-link">
      <Icon className="icon" />
      <Typography style={{ fontWeight: "500", fontSize: "1.5rem" }}>{name}</Typography>
    </NavLink>
  )
}
