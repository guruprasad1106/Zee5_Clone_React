import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Plans from "../components/Plans";
import Footer from "../components/Footer"; // Import Footer Component

const Home = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1A0033 30%, #4B0082 100%)",
        minHeight: "200vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Navbar />
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
        <Carousel />
        <Box sx={{ marginTop: "40px" }}>
          <Plans />
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;
