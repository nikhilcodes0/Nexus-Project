import { useState, useEffect, useRef } from "react"
import MainContainer from "../components/MainContainer"
import Sidebar from "../components/Sidebar"
import ThemedButton from "../components/Button"
import imageNotFound from "../assets/imageNotFound.jpg"
import { collection, getDocs, doc, addDoc } from "@firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, auth, storage } from "../firebase"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { v4 } from "uuid"

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
  FormControl,
  InputLabel,
} from "@mui/material"

import VolunteerActivismTwoToneIcon from "@mui/icons-material/VolunteerActivismTwoTone"

const donatePageStyle = {
  display: "flex",
  width: "80vw",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  marginLeft: "20rem",
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
  backgroundColor: "rgba(46, 125, 50, 0.08)",
  backdropFilter: "blur(3px)",
  display: "flex",
  flexDirection: "column",
  boxShadow: "8px 8px 1rem rgba(0, 0, 0, 0.1)",
}

const boxColStyle = {
  height: "100%",
  display: "flex",
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
  const [selectedImages, setSelectedImages] = useState([])

  const [subjectsinDb, setSubjectsInDb] = useState([])
  const [coursesInDb, setCoursesInDb] = useState([])
  const [semestersInDb, setSemestersInDb] = useState([])

  const [bookTitle, setBookTitle] = useState("")
  const [subject, setSubject] = useState("")
  const [semester, setSemester] = useState("")
  const [course, setCourse] = useState("")
  const [bookCondition, setBookCondition] = useState(0)
  const [uploadedImageUrls, setUploadedImageUrls] = useState([])

  const selectImageBtnRef = useRef(null)

  // Use for navigation
  const navigator = useNavigate()

  const handleImageSelection = (e) => {
    const selectedFiles = e.target.files
    const newImagesArray = []

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i]
      const reader = new FileReader()

      reader.onload = (event) => {
        newImagesArray.push(event.target.result)
        if (newImagesArray.length === selectedFiles.length) {
          setSelectedImages(newImagesArray)
          // console.log(newImagesArray[0])
        }
      }

      reader.readAsDataURL(file)
    }
  }

  async function handleImageUpload() {
    if (selectedImages.length === 0) {
      selectImageBtnRef.current.click()
    } else {
      console.log(selectedImages[0])
      setSelectedImages([])
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const docsSnapshot = await getDocs(collection(db, "courses"))
      const coursesInDb = docsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      const subjectsSnapshot = await getDocs(collection(db, "subjects"))
      const subjectsInDb = subjectsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      setCoursesInDb(coursesInDb)
      setSubjectsInDb(subjectsInDb)
    }

    fetchData()
  }, [])

  function handleCourseChange(e) {
    setCourse(e.target.value)
    coursesInDb.map((course) => {
      if (course.code === e.target.value) {
        setSemestersInDb(course.semesters)
      }
    })
  }

  async function handleBookDonation() {
    try {
      await addDoc(collection(db, "books"), {
        title: bookTitle,
        course: course,
        subject: subject,
        semester: semester,
        donated: false,
        bookCondition: bookCondition,
        donationBy: doc(db, "users", auth.currentUser.email),
        bookImages: ["https://via.placeholder.com/150"], // Always use the default image
      })

      toast.success("Book listed for donation")
      navigator("/")
    } catch (error) {
      console.error("Error adding book:", error)
      // Handle error
    }
  }

  return (
    <MainContainer>
      <Sidebar />
      <Box sx={donatePageStyle}>
        <Typography
          variant="h2"
          sx={{ fontFamily: "Open Sans", fontWeight: 700 }}
          style={mainHeadingStyle}>
          <VolunteerActivismTwoToneIcon style={mainHeadingIconStyle} />
          Donate a Book
        </Typography>

        <form style={formStyle}>
          <Typography
            variant="h5"
            align="center"
            py={2}
            sx={{ fontFamily: "Montserrat", fontWeight: 500 }}>
            Take the first step towards supporting a cause
          </Typography>

          {/* Box to contain all user input */}
          <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
            {/* Take input for book name aka title */}
            <Box sx={{ ...boxColStyle, width: "60%" }}>
              <TextField
                fullWidth
                required
                id="book-name"
                label="Name of the Book"
                margin="normal"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
              />

              {/* Take input for book Subject */}
              <Autocomplete
                fullWidth
                autoComplete
                disablePortal
                clearOnEscape
                freeSolo={true}
                required={true}
                value={""}
                id="book-subject"
                onChange={(e, value) => setSubject(value)}
                onInput={(e, value) => setSubject(e.target.value, value)}
                options={subjectsinDb.map((subject) => subject.name)}
                renderInput={(params) => <TextField {...params} label="Subject" />}
              />

              {/* Course Selection Input */}
              <FormControl>
                <InputLabel id="book-course-label">
                  Used by Course / Department
                </InputLabel>
                <Select
                  id="book-course"
                  value={course}
                  onChange={handleCourseChange}
                  label="Used by Course / Department">
                  {coursesInDb.map((course, index) => (
                    <MenuItem key={index} value={course.code}>
                      {course.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Semester Selection */}
              <FormControl>
                <InputLabel id="book-course-label">Used in Semester</InputLabel>
                <Select
                  id="book-semester"
                  label="Required in Semester / Trimester"
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}>
                  {semestersInDb.map((sem, index) => (
                    <MenuItem key={index} value={sem}>
                      {sem}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Book condition Rating */}
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Typography variant="h5" align="center" fontWeight={600}>
                  Book Condition: {bookCondition}
                </Typography>
                <Rating
                  name="Simple Controlled"
                  value={bookCondition}
                  precision={0.5}
                  size={"large"}
                  onChange={(e) => setBookCondition(Number(e.target.value))}
                />
              </Box>
            </Box>

            {/* Container for displaying uploaded images */}
            <Box
              sx={{
                ...boxColStyle,
                width: "50%",
                alignItems: "center",
                // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}>
              {selectedImages.length ? (
                <ImageList sx={{ width: 500, height: 450 }} cols={3}>
                  {selectedImages.map((item, index) => (
                    <ImageListItem key={index}>
                      <img src={item} style={{ objectFit: "contain" }} />
                    </ImageListItem>
                  ))}
                </ImageList>
              ) : (
                <img src={imageNotFound} alt="No Image" style={blankImageStyle} />
              )}
              {/* Image List */}

              {/* Button for selecting and clearing images */}
              <input
                type="file"
                accept="image/*"
                multiple
                hidden
                ref={selectImageBtnRef}
                onChange={handleImageSelection}
              />
              <Button
                variant="contained"
                color={selectedImages.length ? "error" : "primary"}
                onClick={handleImageUpload}
                sx={{ width: "max-content" }}>
                {selectedImages.length ? "Clear Selection" : "Select Image files"}
              </Button>

              {/* Needless typography, because why not? */}
              <Typography variant="p" align="center">
                Your contribution will help fight climate change alleviate financial
                strain on students
              </Typography>
            </Box>
          </Box>
        </form>

        {/* Donate button */}
        <ThemedButton
          variant="contained"
          color="primary"
          size="large"
          onClick={handleBookDonation}>
          Donate Book
        </ThemedButton>
      </Box>
    </MainContainer>
  )
}
