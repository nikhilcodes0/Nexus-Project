import { useParams } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { Box, Rating, Typography, TextField } from "@mui/material"
import MainContainer from "../components/MainContainer"
import TestImage from "../assets/test.jpg"
import ThemedButton from "../components/Button"

import { Chip } from "@mui/material"
import { useEffect } from "react"
import { getDoc } from "@firebase/firestore"
import { doc } from "@firebase/firestore"
import { useState } from "react"
import { db } from "../firebase"

const bookInfoMainStyle = {
  marginLeft: "21rem",
  display: "flex",
  gap: "2rem",
  padding: "2rem 4rem",
}

const bookInfoStyle = {
  width: "60vw",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
}

const donorInfoDrawerStyle = { width: "20vw" }

const bookDetailStyle = {
  display: "flex",
  height: "60vh",
  gap: "2rem",
}

export default function BookInfo() {
  const { bookId } = useParams()
  const [bookInfo, setBookInfo] = useState({})

  useEffect(() => {
    async function getBookInfo() {
      const bookInfo = await getDoc(doc(db, "books", bookId))
      setBookInfo({ ...bookInfo.data(), id: bookInfo.id })
    }

    getBookInfo()
    // console.log(bookInfo)
  }, [])

  return (
    <MainContainer>
      <Sidebar />
      {/* ROW */}
      <Box sx={bookInfoMainStyle}>
        {/* All the book info will go here */}

        {/* COLUMN */}
        <Box sx={bookInfoStyle}>
          {/* COLUMN */}
          <Box sx={bookDetailStyle}>
            {/* Book Image */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}>
              <img
                src={TestImage}
                alt="book-image"
                style={{
                  width: "20rem",
                  objectFit: "contain",
                  borderRadius: "1rem",
                }}
              />
            </Box>

            {/* book detail section */}
            <Box sx={{ width: "40vw" }}>
              <Typography
                variant={"h3"}
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  padding: "3rem 0 0 0",
                }}>
                {bookInfo.title}
              </Typography>

              {/* Chip Container */}
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1.5rem 0",
                }}>
                <Chip label={bookInfo.subject} color="warning" />
                <Chip label={bookInfo.semester} color="secondary" />
                <Chip label={bookInfo.course?.toUpperCase()} color="secondary" />
              </Box>

              {/*  */}
              <Typography variant="h6" fontWeight={600} color="rgba(0, 0, 0, 0.6)">
                Condition
              </Typography>

              <Rating
                name="Book Condition"
                value={bookInfo.bookCondition || 0} // Ensure that bookInfo.bookCondition is defined
                readOnly
                precision={0.5}
                size="large"
              />

              <br />

              <TextField
                placeholder="Some tales about the book lies here"
                inputProps={{ readOnly: true }}
                multiline
                rows={3}
                value={bookInfo?.description}
                sx={{
                  width: "100%",
                  margin: "2rem 0",
                  backgroundColor: "rgba(46, 125, 50, 0.08);",
                }}
              />

              <ThemedButton sx={{ padding: "0.5rem 4rem", margin: "2rem 0" }}>
                <Typography variant="h6" fontFamily={"Montserrat"}>
                  Get Contact
                </Typography>
              </ThemedButton>
            </Box>
          </Box>

          <Box sx={{ backgroundColor: "lightslategrey", height: "25vh" }}>
            <p>Hello World</p>
          </Box>
        </Box>

        {/* COLUMN */}
        {/* The sidebar will go here */}
        <Box sx={donorInfoDrawerStyle}>
          <h1>Donor Info</h1>
        </Box>
      </Box>
    </MainContainer>
  )
}
