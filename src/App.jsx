


import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import TopRatedMovies from "./components/TopRatedMovies"; // New Component
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1A0033 30%, #4B0082 100%)",
        minHeight: "100vh",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingBottom: "20px",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Content Container */}
      <Box
        sx={{
          width: "90%",
          maxWidth: "1200px",
          marginTop: "20px",
          padding: "30px",
          borderRadius: "10px",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Movie & TV Show Carousel */}
        <Carousel />

        {/* Top Rated Movies Section */}
       
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default App;

