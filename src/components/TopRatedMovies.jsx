import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=YOUR_TMDB_API_KEY")
      .then((res) => res.json())
      .then((data) => setMovies(data.results.slice(0, 6))) // Get top 6 movies
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: "center", marginBottom: "20px" }}>
        ⭐ Top Rated Movies
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <Box sx={{ textAlign: "center" }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <Typography variant="body1" sx={{ marginTop: "10px" }}>
                {movie.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TopRatedMovies;
