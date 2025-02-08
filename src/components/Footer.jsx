import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0D001A",
        color: "white",
        textAlign: "center",
        padding: "20px",
        marginTop: "50px",
        width: "100%",
        borderTop: "2px solid rgba(255,255,255,0.2)",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Connect with Us
      </Typography>

      <Box sx={{ marginTop: "10px" }}>
        {/* Social Links */}
        <Link
          href="https://www.instagram.com/your_insta_id"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#E1306C", textDecoration: "none", marginRight: "15px" }}
        >
          Instagram
        </Link>

        <Link
          href="mailto:realquick@gmail.com"
          sx={{ color: "white", textDecoration: "none", marginRight: "15px" }}
        >
          Email: realquick@gmail.com
        </Link>

        <Link
          href="https://twitter.com/your_twitter_handle"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#1DA1F2", textDecoration: "none", marginRight: "15px" }}
        >
          Twitter
        </Link>
      </Box>

      {/* Privacy Policy & Phone Number */}
      <Box sx={{ marginTop: "10px" }}>
        <Link
          href="/privacy-policy"
          sx={{ color: "white", textDecoration: "none", marginRight: "15px" }}
        >
          Privacy Policy
        </Link>

        <Typography sx={{ display: "inline-block", color: "white" }}>
          📞 Phone: +123 456 7890
        </Typography>
      </Box>

      <Typography sx={{ marginTop: "10px", fontSize: "12px", opacity: "0.7" }}>
        &copy; {new Date().getFullYear()} RealQuick. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
