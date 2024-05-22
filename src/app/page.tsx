"use client";

import React, { useEffect, useState } from "react";
import { getPopularMovies, getRatedMovies, getUpcomingMovies } from "./lib/api_request";
import { PrimeReactProvider } from "primereact/api";
import CarouselMovies from "@/components/Carousel";
import Herobanner from "@/components/Herobanner";



export default function Home() {
  const [popularMovies, setPopularMovies] = useState<any[]>([]);
  const [ratedMovies, setRatedMovies] = useState<any[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<any[]>([]);
  const [bgHeroBanner, setBgHeroBanner] = useState<any[]>([]);

  useEffect(() => {
    const fetchPopularMoviesData = async () => {
      try {
        const data = await getPopularMovies();
        setPopularMovies(data.results);
        
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setBgHeroBanner(data.results[0].backdrop_path)
      } catch (error: any) {
        console.error("Error fetching popular movies:", error.message);
      }
    };

    fetchPopularMoviesData();
  }, []);

  useEffect(() => {
    const fetchRatedMoviesData = async () => {
      try {
        const data = await getRatedMovies();
        setRatedMovies(data.results);
      } catch (error: any) {
        console.error("Error fetching rated movies:", error.message);
      }
    };

    fetchRatedMoviesData();
  }, []);

  useEffect(() => {
    const fetchUpcomingMoviesData = async () => {
      try {
        const data = await getUpcomingMovies();
        setUpcomingMovies(data.results);
      } catch (error: any) {
        console.error("Error fetching upcoming movies:", error.message);
      }
    };

    fetchUpcomingMoviesData();
  }, []);

  return (
    <PrimeReactProvider>
      <Herobanner bgHeroBanner={bgHeroBanner}/>
      <h2 className="titre-carousel">Nos films populaires</h2>
      <CarouselMovies moviesFetch={popularMovies}/>
      <h2 className="titre-carousel">Nos films les mieux notés</h2>
      <CarouselMovies moviesFetch={ratedMovies}/>
      <h2 className="titre-carousel">Nos films à venir</h2>
      <CarouselMovies moviesFetch={upcomingMovies}/>
    </PrimeReactProvider>
  );
}
