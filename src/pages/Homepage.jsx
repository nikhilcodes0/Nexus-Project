import { auth } from "../firebase"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import BookCard from '../components/BookCard';
import TextField from "@mui/material/TextField"
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Stack from "@mui/material/Stack";
import Grid from '@mui/material/Grid';

import "../Style/homepage.css"
import ill1 from "../components/assets/ill1.svg"

const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    border-color: transparent;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      &:hover {
        border-color: transparent;
      }
      border-color: transparent;
    }
  }
  & MuiOutlinedInput-input::placeholder {
    font-size: 2rem;
  }
  
`;

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
              <div className="header-content">
                <div className="caption">
                  <h1>Save the Planet</h1>
                  <h1>Save your Wallet</h1>
                </div>
                <div className="illustration">
                    <img src={ill1} alt="" />
                </div>
              </div>
            </div>
            <div className="searchbar">
              <WhiteBorderTextField
                style={{backgroundColor:"white", borderRadius:"1rem"
                }}
                fullWidth
                sx={{
                  '&::placeholder':{
                    fontSize: "2rem"
                  }
                }}
                InputProps={{ sx: { borderRadius: "1rem", }, 
                startAdornment:(
                  <SearchIcon/>
                )
              }}
                placeholder='  Search by your book name, course, semester'
                
              >

              </WhiteBorderTextField>
            </div>
            <Stack
              direction="row"
              spacing={10}
              sx={{
                // backgroundColor: "red",
                width: "90%",
                margin: "3rem auto",
                padding: "1rem",
              }}
            >
              <Grid
                container
                rowSpacing={5} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >

                <Grid item xs={6} >
                  <BookCard/>
                </Grid>
                <Grid item xs={6}>
                  <BookCard/>
                </Grid>
                <Grid item xs={6}>
                  <BookCard/>
                </Grid>
                <Grid item xs={6}>
                  <BookCard/>
                </Grid>
                <Grid item xs={6} >
                  <BookCard/>
                </Grid>
                <Grid item xs={6}>
                  <BookCard/>
                </Grid>
                <Grid item xs={6}>
                  <BookCard/>
                </Grid>
                <Grid item xs={6}>
                  <BookCard/>
                </Grid>
                <Grid item xs={6} >
                  <BookCard/>
                </Grid>
                <Grid item xs={6}>
                  <BookCard/>
                </Grid>
                <Grid item xs={6}>
                  <BookCard/>
                </Grid>
                <Grid item xs={6}>
                  <BookCard/>
                </Grid>
              </Grid>
            </Stack>
        </div>
    </>
  )
}

export default Homepage
