import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Correct hook for navigation

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const signupDetails = {
      username: data.get("username"),
      password: data.get("password"),
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`, signupDetails);

      if (response.status === 201) {
        alert("Signup successful! Redirecting to login...");
        navigate("/login"); // Correct navigation method
      }
    } catch (error) {
      console.error("Error during signup:", error.response?.data || error.message);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://bingw.jasonzeng.dev/?index=random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/login" variant="body2">
                  {"Already have an account? Log In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
