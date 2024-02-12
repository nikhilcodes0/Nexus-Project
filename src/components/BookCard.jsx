import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import testImg from "../assets/test.jpg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import "../Style/bookcard.css";
const chipStyles = {
  backgroundColor: "rgba(46, 125, 50, 0.3)",
  "&:hover": {
    backgroundColor: "rgba(46, 125, 50, 0.5)",
  },
};

function BookCard({ bookid, title, rating, course, subject, semester }) {
  // console.log(bookid, title, rating, course, subject, semester);
  return (
    <>
      {/* Main Card Container */}
      <Box
        sx={{
          backgroundColor: "rgba(46, 125, 50, 0.1)",
          width: "40rem",
          borderRadius: "15px",
          height: "300px",
          padding: "1.5rem",
          boxShadow: "1px 5px 10px 1px gray",
          backdropFilter: "blur(3px)",
        }}
      >
        <Stack
          direction="row"
          spacing={4}
          sx={{
            height: "100%",
          }}
        >
          {/* Book Image Box */}
          <Box
            sx={{
              borderRadius: "15px",
              boxShadow: "1px 1px 26px 1px gray",
            }}
          >
            <img src={testImg} alt="Book Image" className="bookimg" />
          </Box>
          {/* Book Content Container */}
          <Stack
            sx={{
              padding: "1rem",
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                // fontSize: "1.7rem",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                marginTop: "1rem",
              }}
            >
              <Chip
                label={course.toUpperCase()}
                component="a"
                href="#"
                clickable
                sx={{
                  ...chipStyles,
                }}
              />
              <Chip
                label={subject}
                component="a"
                href="#"
                clickable
                sx={{
                  ...chipStyles,
                }}
              />
              <Chip
                label={semester}
                component="a"
                href="#"
                clickable
                sx={{
                  ...chipStyles,
                }}
              />
            </Stack>
            <Rating
              name="size-large"
              value={rating}
              size="large"
              readOnly
              precision={0.5}
              sx={{
                marginTop: "1rem",
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(0, 128, 128, 1)",
                color: "white",
                borderRadius: "5px",
                fontWeight: "bold",
                marginTop: "1rem",
                "&:hover": {
                  backgroundColor: "rgba(0, 128, 128, 0.8)",
                },
              }}
            >
              <Link
                to={`books/${bookid}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                View More
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default BookCard;
