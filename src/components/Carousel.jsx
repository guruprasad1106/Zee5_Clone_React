

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const trendingMovies = [
  {
    id: 1,
    title: "Inception",
    image: "https://image.tmdb.org/t/p/original/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 3,
    title: "Parasite",
    image: "https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
  },
  {
    id: 4,
    title: "Iron Man",
    image: "https://image.tmdb.org/t/p/original/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
  },
  {
    id: 5,
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/original/mS4EvhsrT0SQZOlWrQEzWI5KiUa.jpg",
  },
];

const trendingTVShows = [
  {
    id: 1,
    title: "Better Call Saul",
    image: "https://image.tmdb.org/t/p/original/t15KHp3iNfHVQBNIaqUGW12xQA4.jpg",
  },
  {
    id: 2,
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/original/gc8PfyTqzqltKPW3X0cIVUGmagz.jpg",
  },
  {
    id: 3,
    title: "Chernobyl",
    image: "https://image.tmdb.org/t/p/original/20eIP9o5ebArmu2HxJutaBjhLf4.jpg",
  },
  {
    id: 4,
    title: "The Sopranos",
    image: "https://image.tmdb.org/t/p/original/isJ4POBlbH5kmHVgbdP4gC4nFqO.jpg",
  },
  {
    id: 5,
    title: "The Office",
    image: "https://image.tmdb.org/t/p/original/mLyW3UTgi2lsMdtueYODcfAB9Ku.jpg",
  },
];

const Carousel = () => {
  return (
    <div style={{ padding: "20px", borderRadius: "10px" }}>
      {/* Trending Movies Section */}
      <h2 style={{ color: "white", textAlign: "center", marginBottom: "10px" }}>
        🎬 Trending Movies
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
        {trendingMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div style={{ textAlign: "center" }}>
              <img
                src={movie.image}
                alt={movie.title}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <p style={{ color: "white", marginTop: "10px", fontSize: "16px" }}>
                {movie.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Trending TV Shows Section */}
      <h2
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "30px",
          marginBottom: "10px",
        }}
      >
        📺 Trending TV Shows
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
        {trendingTVShows.map((show) => (
          <SwiperSlide key={show.id}>
            <div style={{ textAlign: "center" }}>
              <img
                src={show.image}
                alt={show.title}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <p style={{ color: "white", marginTop: "10px", fontSize: "16px" }}>
                {show.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
