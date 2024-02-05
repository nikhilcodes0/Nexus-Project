import React from "react";


// Importing Material UI Components
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


const ListText = styled(ListItemText)({
  marginLeft: '-1rem',
  marginTop: '0.5rem',
  
  

});

const Li = styled(ListItem)({
  // backgroundColor: 'rgba(76, 175, 80, 0.4)',
  
  width: '14rem',
  margin: '1rem auto',
  borderRadius: '15px',
  
  padding:'0 0 0px 0',
  transition: '0.2s ease-in-out',
  // '&:hover': {
  //   backgroundColor: 'rgba(76, 175, 80, 1)',
  // },
  
});

const Listyles = {
  '&.Mui-selected': {
    backgroundColor: 'rgba(76, 175, 80, 0.4)',
    boxShadow:'4px 4px 8px 0px grey', // Change to your preferred color
    '&:hover': {
      backgroundColor: 'rgba(76, 175, 80, 0.8)', // Change to your preferred hover color
    },
  },
  '&:hover': {
    backgroundColor: 'lightgray',
    // boxShadow:'0px 0px 4px 0px grey', // Optional: Change hover color for non-selected items
  },
}

const LiButton = styled(ListItemButton)({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '15px',
  paddingTop:'3px',
  paddingBottom:'3px',
});

const LogoutLi = styled(ListItemButton)({
  border:'2px solid red',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '15px',
  paddingTop:'3px',
  paddingBottom:'3px',
  '&:hover': {
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    
  },

});



// Importing local files
import logo from "../components/assets/logo.svg"; //Importing logo
import "../Style/Sidebar.css" //Importing CSS file


function Sidebar() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };


  return (
    <>
      <div className="main-sidebar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-links">
          <List component="nav" >
            <Li>
              <LiButton 
                sx={{ ...Listyles               
                }}
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}

              >
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListText disableTypography primary={<Typography variant="body2" style={{ color: 'black' , fontWeight: '500', fontSize: '1.35rem', opacity:'70%'}}>Home</Typography>}/>
              </LiButton>
            </Li>
            <Li>
              <LiButton
                sx={{ ...Listyles               
                }}
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemIcon>
                  <VisibilityIcon />
                </ListItemIcon>
                <ListText disableTypography primary={<Typography variant="body2" style={{ color: 'black' , fontWeight: 'normal', fontSize: '1.3rem', opacity:'70%'}}>Watching</Typography>}/>
              </LiButton>
            </Li>
            <Li>
              <LiButton 
                sx={{ ...Listyles               
                }}
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}

              >
                <ListItemIcon>
                  <VolunteerActivismIcon />
                </ListItemIcon>
                <ListText disableTypography primary={<Typography variant="body2" style={{ color: 'black' , fontWeight: 'normal', fontSize: '1.3rem', opacity:'70%'}}>Donate</Typography>}/>
              </LiButton>
            </Li>
            <Li>
              <LiButton 
                sx={{ ...Listyles               
                }}
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}

              >
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListText disableTypography primary={<Typography variant="body2" style={{ color: 'black' , fontWeight: 'normal', fontSize: '1.3rem', opacity:'70%'}}>Profile</Typography>}/>
              </LiButton>
            </Li>
          </List>
        </div>
        <div className="footer">
          <List>
              <Li>
                <LiButton>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListText disableTypography primary={<Typography variant="body2" style={{ color: 'black' , fontWeight: '500', fontSize: '1.35rem', opacity:'70%'}}>About Us</Typography>}/>
                </LiButton>
              </Li>
              <Li>
                <LogoutLi>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListText disableTypography primary={<Typography variant="body2" style={{ color: 'black' , fontWeight: '500', fontSize: '1.35rem', opacity:'70%', '&:hover': {
                    color:'white',
                  }}}>Log Out</Typography>}/>
                </LogoutLi>
              </Li>
          </List>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

