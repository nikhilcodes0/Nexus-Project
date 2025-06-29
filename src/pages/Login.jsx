import { useState, useEffect } from "react";
import pic from "../assets/logo.svg";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import { useForm } from "react-hook-form";
import "../Style/login.css";
import GoogleIcon from "../assets/google.svg";
import { database } from "../firebase";
import { ref, set } from "firebase/database";
import { AuthErrorCodes, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import SchoolIcon from "@mui/icons-material/School";
import Select from "@mui/material/Select";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase"; // Make sure this is your Firestore instance

const SubmitButton = styled(Button)({
  backgroundColor: "#008080",
  color: "white",
  fontSize: "1rem",
  marginTop: "1rem", // CODEREVIEW: Use theme.spacing(2) instead of "1rem"
  fontFamily: "Montserrat",
  "&:hover": {
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    backgroundColor: "#046666",
  },
});

const FormStack = styled(Stack)({
  margin: "5rem auto",
  width: "35ch",
});

function Login() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [action, setAction] = useState("Sign In");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [semester, setSemester] = useState("");
  const [course, setCourse] = useState("");

  // Use for naviation
  const navigator = useNavigate();

  // Ensure that the user does not see the login page if he is already logged in
  useEffect(() => {
    auth.currentUser ? navigator("/") : null;
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Function to sign in the user
    async function signIn() {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        // Navigate to home if the user has a UID
        if (user.user.uid) {
          toast.success("Login Successful!");
          navigator("/");
        }
      } catch (error) {
        if (error.code === AuthErrorCodes.INVALID_PASSWORD)
          toast.error("Invalid username or password");
        else if (error.code === AuthErrorCodes.USER_NOT_FOUND)
          toast.error("User not found");
        else toast.error(error.message);
        setPassword("");
      }
    }

    // Function to facilitate signing up
    async function signUp() {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        toast.success("Account created successfully!");
        const user_data = {
          email: email,
          fullname: name,
          semester: semester,
          last_login: Date.now(),
        };
        await setDoc(doc(db, "users", user.email), user_data);
        setAction("Sign In");
        setPassword("");
      } catch (error) {
        if (error.code === AuthErrorCodes.EMAIL_EXISTS)
          toast.error("Email already exists");
        else toast.error(error.message);
        setPassword("");
      }
    }

    // Call functions according to the selected action
    action === "Sign In" ? await signIn() : await signUp();
  };

  const nameTextField = (
    <TextField
      placeholder="Enter your name"
      label="Your Name"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      fullWidth
      name="username"
      type="name"
      {...register("name", { required: "Please enter your username" })}
      error={Boolean(errors.name)}
      helperText={errors.name?.message}
      onChange={(e) => setName(e.target.value)}
      value={name}
    ></TextField>
  );

  const semesterTextField = (
    <FormControl fullWidth>
      <InputLabel id="course-label">Semester</InputLabel>
      <Select
        label="Semester"
        variant="outlined"
        fullWidth
        name="semester"
        type="semester"
        {...register("semester", { required: "Please enter your semester" })}
        error={Boolean(errors.semester)}
        helperText={errors.semester?.message}
        onChange={(e) => setSemester(e.target.value)}
        value={semester}
      >
        <MenuItem value={"I SEM"}>I</MenuItem>
        <MenuItem value={"II SEM"}>II</MenuItem>
        <MenuItem value={"III SEM"}>III</MenuItem>
        <MenuItem value={"IV SEM"}>IV</MenuItem>
        <MenuItem value={"V SEM"}>V</MenuItem>
        <MenuItem value={"VI SEM"}>VI</MenuItem>
        <MenuItem value={"VII SEM"}>VII</MenuItem>
        <MenuItem value={"VIII SEM"}>VIII</MenuItem>
      </Select>
    </FormControl>
  );

  const courseTextField = (
    <FormControl fullWidth>
      <InputLabel id="course-label">Course</InputLabel>
      <Select
        label="Course"
        variant="outlined"
        fullWidth
        name="course"
        type="course"
        {...register("course", { required: "Please enter your course" })}
        error={Boolean(errors.course)}
        helperText={errors.course?.message}
        onChange={(e) => setCourse(e.target.value)}
        value={course}
      >
        <MenuItem value={"B.Tech"}>B.Tech</MenuItem>
        <MenuItem value={"M.Tech"}>M.Tech</MenuItem>
        <MenuItem value={"BBA"}>BBA</MenuItem>
        <MenuItem value={"MBA"}>MBA</MenuItem>
        <MenuItem value={"BCA"}>BCA</MenuItem>
        <MenuItem value={"MCA"}>MCA</MenuItem>
        <MenuItem value={"BCOM"}>BCOM</MenuItem>
        <MenuItem value={"MCOM"}>MCOM</MenuItem>
      </Select>
    </FormControl>
  );

  const emailTextField = (
    <TextField
      placeholder="Enter your college email"
      label="Your Email"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <EmailIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      fullWidth
      name="email"
      type="email"
      {...register("email", { required: "Please enter your college email" })}
      error={Boolean(errors.email)}
      helperText={errors.email?.message}
      onChange={(e) => setEmail(e.target.value)}
      value={email}
    ></TextField>
  );

  const passwordTextField = (
    <TextField
      placeholder="Enter your password"
      label="Password"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword((show) => !show)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      variant="outlined"
      fullWidth
      name="password"
      type={showPassword ? "text" : "password"}
      {...register("password", { required: "Please enter your password" })}
      error={Boolean(errors.password)}
      helperText={errors.password?.message}
      onChange={(e) => setPassword(e.target.value)}
      value={password}
    ></TextField>
  );

  return (
    <div className="main">
      <div className="sidebar">
        <div className="top">
          <Typography variant="h3" textAlign="center" fontFamily={"Montserrat"}>
            Sign In
          </Typography>
          <Typography variant="h6" textAlign="center" fontFamily={"Montserrat"}>
            Connect with Seniors, Get access to books or ask for it... and more
          </Typography>
        </div>
        <div className="btm">
          <p>Go Green</p>
          <p>Embrace Savings</p>
        </div>
      </div>
      <div className="main-form">
        <img src={pic} alt="Logo" />
        <form>
          <FormStack spacing={2}>
            {action === "Sign Up" ? nameTextField : null}
            {action === "Sign Up" ? semesterTextField : null}
            {action === "Sign Up" ? courseTextField : null}

            {/* Email and password text fields */}
            {emailTextField}
            {passwordTextField}

            <SubmitButton
              variant="contained"
              type="submit"
              onClick={handleFormSubmit}
            >
              {action}
            </SubmitButton>
          </FormStack>
        </form>

        {/* Show different text depending on intent */}
        {action === "Sign Up" ? (
          <Typography variant="caption" display="block" textAlign="center">
            Already have an account?
            <Link
              href="#"
              underline="hover"
              onClick={() => setAction("Sign In")}
            >
              {"Sign In"}
            </Link>
          </Typography>
        ) : (
          <Typography variant="caption" display="block" textAlign="center">
            Don't have an account yet?{" "}
            <Link
              href="#"
              underline="hover"
              onClick={() => setAction("Sign Up")}
            >
              {"Sign Up Now!"}
            </Link>
          </Typography>
        )}

        <Divider>OR</Divider>

        <Typography variant="caption" display="block" textAlign="center">
          You can {action} using:
        </Typography>
        <FormControl>
          <Link href="#" margin="0 auto">
            <IconButton aria-label="Google">
              <img src={GoogleIcon} alt="Google" className="icon" />
            </IconButton>
          </Link>
        </FormControl>
      </div>
    </div>
  );
}

export default Login;
