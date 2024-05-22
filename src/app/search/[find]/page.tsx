"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { searchMovies } from "@/app/lib/api_request";
import { Skeleton } from "primereact/skeleton";
import CardMovie from "@/components/CardMovie";

const SearchPage = () => {
  const { find } = useParams();
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    const fetchSearchPage = async () => {
      try {
        const queryString = Array.isArray(find) ? find.join(",") : find;
        const data = await searchMovies(queryString);
        setSearchResults(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchSearchPage();
  }, [find]);

  return (
    <div>
      <div className="movie-page-container">
        <h1 className="titre-center">Les résultats de votre recherche</h1>
        {searchResults && searchResults.length > 0 ? (
          <div className="movie-container">
            {searchResults.map((movie, index) => (
              <CardMovie
                key={index}
                title={movie.title}
                imagePath={movie.poster_path}
                id={movie.id}
              />
            ))}
          </div>
        ) : (
          <div className="movie-container">
            {[...Array(20)].map((_, index) => (
              <Skeleton key={index} width="350px" height="521px"></Skeleton>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
