import React, { useContext, useState } from "react";
import { auth, database } from "../../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  setDoc,
  doc,
} from "firebase/firestore";
import { login } from "../../App";
// import { getFirestore } from 'firebase/firestore';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Section, Students, Divider, Contain } from "./style";

// import {auth, database} from '../Firebase';
// import {createUserWithEmailAndPassword} from 'firebase/auth';
// import {collection, addDoc, getDocs, doc,setDoc}from 'firebase/firestore';

function Copyright(props) {
  return (
    <Typography variant="body2" color="#000000" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Register = (props) => {
  const { isLogin, setLogin } = useContext(login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [institute, setInstitute] = useState("");
  const [interest, setInterest] = useState("");
  const [points, setPoint] = useState(0);

  const collectionRef = collection(database, "users");
  const collectionRef2 = collection(database, "mentors");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const name = data.get("name");
    const institute = data.get("institute");
    const interest = data.get("interest");
    const points = 0;

    setDoc(doc(database, "users", email), {
      name: name,
      institute: institute,
      email: email,
      password: password,
      points: 0,
      interest: interest,
    })
      .then(() => {
        alert("Data Added");
      })
      .catch((error) => {
        alert(error.message);
      });

    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log("User Created"))
      .catch((error) => alert(error.message));
  };

  const handleSubmitMentor = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const name = data.get("name");
    const institute = data.get("institute");
    const interest = data.get("interest");
    const year = data.get("interest");
    const experience = data.get("experience");

    setDoc(doc(database, "mentors", email), {
      name: name,
      institute: institute,
      email: email,
      password: password,
      experience: experience,
      year: year,
      interest: interest,
    })
      .then(() => {
        alert("Data Added");
      })
      .catch((error) => {
        alert(error.message);
      });

    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log("User Created"))
      .catch((error) => alert(error.message));
  };

  const getStudents = async () => {
    console.log("getStudents");
    getDocs(collectionRef).then((response) => {
      console.log(
        response.docs.map((item) => {
          return item.data();
        })
        // response
      );
    });
  };
  const getMentors = () => {
    console.log("getMentors");
    getDocs(collectionRef2).then((response) => {
      console.log(
        response.docs.map((item) => {
          return item.data();
        })
      );
    });
  };

  return (
    <Section id={props.id}>
      <h1>REGISTRATION</h1>
      <Contain>
        <Divider>
          <Students>
            <ThemeProvider theme={theme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Students
                  </Typography>
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="name"
                      label="Name"
                      type="text"
                      id="name"
                      autoComplete="Full Name"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="institute"
                      label="Institute"
                      type="text"
                      id="institute"
                      autoComplete="College Attending"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="interest"
                      label="Area of Interest"
                      type="text"
                      id="interest"
                      autoComplete="Enter the area which interests you the most"
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      REGISTER
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2" onClick={props.onCancel}>
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
              </Container>
            </ThemeProvider>
          </Students>
        </Divider>
        <Divider>
          <Students>
            <ThemeProvider theme={theme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Mentor
                  </Typography>
                  <Box
                    component="form"
                    onSubmit={handleSubmitMentor}
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="name"
                      label="Name"
                      type="text"
                      id="name"
                      autoComplete="Full Name"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="institute"
                      label="Institute"
                      type="text"
                      id="institute"
                      autoComplete="College Attending"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="year"
                      label="Year Passed Out"
                      type="text"
                      id="year"
                      autoComplete="Year you Passed Out"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="interest"
                      label="Area of Interest"
                      type="text"
                      id="interest"
                      autoComplete="cEnter the area which interests you the most"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="experience"
                      label="Experience"
                      type="text"
                      id="experience"
                      autoComplete="Enter your experience in that area"
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      REGISTER
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2" onClick={props.onCancel}>
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
              </Container>
            </ThemeProvider>
          </Students>
        </Divider>
      </Contain>
    </Section>
  );
};

export default Register;
