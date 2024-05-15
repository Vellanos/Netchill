"use client";
import { useParams } from "next/navigation";
import { getSpecificRatedMovies } from "@/app/lib/api_request";
import { useEffect, useState } from "react";
import PaginationButton from "@/components/PaginationButton";
import CardMovie from "@/components/CardMovie";
import { Skeleton } from 'primereact/skeleton';
        

function ratedPage() {
  const [specificRatedMovies, setSpecificRatedMovies] = useState<any[]>([]);
  const params = useParams();
  const page = parseInt(params.page, 10);

  useEffect(() => {
    const fetchSpecificRatedMoviesData = async () => {
      try {
        const data = await getSpecificRatedMovies(page);
        setSpecificRatedMovies(data.results);
      } catch (error: any) {
        console.error("Error fetching rated movies:", error.message);
      }
    };

    fetchSpecificRatedMoviesData();
  }, [page]);

  return (
    <div className="movie-page-container">
      <h1 className="titre-center">Les films préférés des utilisateurs</h1>
      <div className="pagination">
        <PaginationButton direction={"left"} newPage={page - 1} cat={"rated"}/>
        <p>{page}</p>
        <PaginationButton direction={"right"} newPage={page + 1} cat={"rated"}/>
      </div>
      {specificRatedMovies && specificRatedMovies.length > 0  ? (
        <div className="movie-container">
          {specificRatedMovies.map((movie, index) => (
            <CardMovie
              key={index}
              title={movie.title}
              imagePath={movie.poster_path}
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
      <div className="pagination">
        <PaginationButton direction={"left"} newPage={page - 1} cat={"rated"}/>
        <p>{page}</p>
        <PaginationButton direction={"right"} newPage={page + 1} cat={"rated"}/>
      </div>
    </div>
  );

}

export default ratedPage;
