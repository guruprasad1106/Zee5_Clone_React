import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const TopRatedMoviesCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=YOUR_TMDB_API_KEY`
        );
        const data = await response.json();
        setMovies(data.results.slice(0, 10)); // Fetch top 10 movies
      } catch (error) {
        console.error('Error fetching top-rated movies:', error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <div style={{ padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>
        Top-Rated Movies
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 2500 }}
        loop
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopRatedMoviesCarousel;
