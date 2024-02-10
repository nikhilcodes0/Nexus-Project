import smallblob from "../assets/blob-1-opacity-100.gif";
import largeblob from "../assets/blob-1-opacity-50.gif";
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

import "../Style/profile.css";

export default function Profile() {
  return (
    <>
      <Sidebar />
      <Box
        sx={{
          marginLeft: "20rem",
        }}
      >
        <Box
          sx={{
            margin: "5rem auto",
            width: "40rem",
          }}
        >
          <Avatar
            sx={{
              width: "10rem",
              height: "10rem",
              fontSize: "4rem",
              backgroundColor: "green",
              margin: "2rem auto",
            }}
          >
            S
          </Avatar>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              margin: "4rem auto 2rem auto",
            }}
          >
            Hi, Mys7erio
          </Typography>
          <Stack
            direction="row"
            spacing={6}
            sx={{
              margin: "0rem auto",
              width: "fit-content",
            }}
          >
            <Button
              variant="contained"
              sx={{
                margin: "0 auto",
                backgroundColor: "green",
                color: "white",
                fontWeight: "bold",
                padding: "0.8rem 2rem",
                boxShadow: "0px 4px 4px 0px rgb(0 0 0 / 25%)",
                "&:hover": {
                  backgroundColor: "darkgreen",
                },
              }}
            >
              Connect
            </Button>
            <IconButton
              sx={{
                backgroundColor: "green",
                color: "white",
                padding: "0.8rem",
                boxShadow: "0px 4px 4px 0px rgb(0 0 0 / 25%)",
                "&:hover": {
                  backgroundColor: "darkgreen",
                },
              }}
            >
              <EditIcon />
            </IconButton>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            sx={{
              margin: "2rem auto",
              width: "fit-content",
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              width="fit-content"
              sx={{
                margin: "2rem auto",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Full Name:
              </Typography>
              <Typography variant="h6">Shakir Ali</Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              width="fit-content"
              sx={{
                margin: "2rem auto",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Books Donated:
              </Typography>
              <Typography variant="h6">10</Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            spacing={10}
            sx={{
              margin: "2rem auto",
              width: "fit-content",
            }}
          >
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  margin: "2rem auto",
                  width: "fit-content",
                  textAlign: "center",
                  padding: "0.5rem 0.8rem",
                }}
              >
                Course:
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "green",
                  color: "white",
                  padding: "0.5rem 2rem",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  width: "100px",
                  opacity: "0.8",
                  boxShadow: "0px 4px 4px 0px rgb(0 0 0 / 25%)",
                }}
              >
                BCA
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  margin: "2rem auto",
                  width: "fit-content",
                  textAlign: "center",
                  padding: "0.5rem 0.2rem",
                }}
              >
                Semester:
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "green",
                  color: "white",
                  padding: "0.5rem 2rem",
                  margin: "0 auto",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  width: "100px",
                  opacity: "0.8",
                  boxShadow: "0px 4px 4px 0px rgb(0 0 0 / 25%)",
                  textAlign: "center",
                }}
              >
                IV
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              sx={{
                width: "fit-content",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  margin: "2rem auto",
                  width: "fit-content",
                  textAlign: "center",
                  padding: "0.5rem 0.5rem",
                }}
              >
                College:
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "green",
                  color: "white",
                  padding: "0.5rem 2rem",
                  margin: "0 auto",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  width: "100px",
                  opacity: "0.8",
                  boxShadow: "0px 4px 4px 0px rgb(0 0 0 / 25%)",
                  textAlign: "center",
                }}
              >
                KJC
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          width: "fit-content",
          position: "absolute",
          bottom: "-13rem",
          right: "-13rem",
        }}
      >
        <img src={largeblob} alt="big blob" className="bigblob" />
        <img src={smallblob} alt="small blob" className="smallblob" />
      </Box>
    </>
  );
}
