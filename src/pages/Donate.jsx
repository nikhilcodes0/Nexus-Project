import { useState } from "react"
import MainContainer from "../components/MainContainer"
import Sidebar from "../components/Sidebar"
import ThemedButton from "../components/Button"
import TestImage from "../assets/test.jpg"
import imageNotFound from "../assets/imageNotFound.jpg"

import {
  Box,
  Typography,
  TextField,
  Autocomplete,
  Select,
  MenuItem,
  Rating,
  Button,
  ImageList,
  ImageListItem,
} from "@mui/material"

import VolunteerActivismTwoToneIcon from "@mui/icons-material/VolunteerActivismTwoTone"

const donatePageStyle = {
  display: "flex",
  width: "80vw",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
}

const mainHeadingStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
}

const mainHeadingIconStyle = { width: "4rem", height: "4rem" }

const formStyle = {
  width: "80%",
  minHeight: "70vh",
  padding: "2rem",
  borderRadius: "1rem",
  backgroundColor: "rgba(46, 125, 50, 0.05)",
  backdropFilter: "blur(2px)",
  display: "flex",
  flexDirection: "column",
}

const boxColStyle = {
  height: "100%",
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "space-around",
}

const blankImageStyle = {
  width: "25rem",
  objectFit: "contain",
  borderRadius: "1rem",
}

export default function Donate() {
  const [selectedImages, setSelectedImages] = useState([0, 0, 0, 0, 0, 0])
  return (
    <MainContainer>
      <Sidebar />
      <Box sx={donatePageStyle}>
        <Typography variant="h2" style={mainHeadingStyle}>
          <VolunteerActivismTwoToneIcon style={mainHeadingIconStyle} />
          Donate a Book
        </Typography>

        <form style={formStyle}>
          <Typography variant="h4" align="center">
            Take the first step towards supporting a cause
          </Typography>
          <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
            <Box sx={boxColStyle}>
              <TextField
                fullWidth
                required
                id="book-name"
                label="Name of the Book"
                margin="normal"
              />

              <Autocomplete
                fullWidth
                autoComplete
                disablePortal
                clearOnEscape
                freeSolo={true}
                required={true}
                id="book-subject"
                options={top100Films}
                renderInput={(params) => (
                  <TextField {...params} label="Course / Subject" />
                )}
              />

              <Select
                value="0"
                id="book-semester"
                label="Required in Semester / Trimester"
                onChange={() => {}}>
                <MenuItem value={0}>Select Semester / Trimester</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>

              <Select
                value="0"
                id="book-course"
                label="Used by Course / Department"
                onChange={() => {}}>
                <MenuItem value={0}>Select Course / Department</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>

              {/* Book condiction Rating */}
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Typography variant="h6" align="center">
                  Condition: {4}
                </Typography>
                <Rating name="Simple Controlled" value={4} />
              </Box>
            </Box>

            {/* Container for displaying uploaded images */}
            <Box sx={{ ...boxColStyle, alignItems: "center" }}>
              {selectedImages.length ? (
                <ImageList sx={{ width: 500, height: 450 }} cols={3}>
                  {selectedImages.map((item, index) => (
                    <ImageListItem key={index}>
                      <img src={TestImage} />
                    </ImageListItem>
                  ))}
                </ImageList>
              ) : (
                <img src={imageNotFound} alt="No Image" style={blankImageStyle} />
              )}
              {/* Image List */}

              {/* Button for selecting and clearing images */}
              <Button
                variant="contained"
                color={selectedImages.length ? "error" : "primary"}
                onClick={() => setSelectedImages([])}
                sx={{ width: "max-content" }}>
                {selectedImages.length ? "Clear Selection" : "Select Image files"}
              </Button>

              {/* Needless typography, because why not? */}
              <Typography variant="p" align="center">
                Your contribution will alleviate climate change and help students in
                need
              </Typography>
            </Box>
          </Box>
        </form>

        {/* Donate button */}
        <ThemedButton variant="contained" color="primary" size="large">
          Donate Book
        </ThemedButton>
      </Box>
    </MainContainer>
  )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
]
