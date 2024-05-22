"use client";
import { useParams } from "next/navigation";
import { getSpecificPopularMovies } from "@/app/lib/api_request";
import { useEffect, useState } from "react";
import PaginationButton from "@/components/PaginationButton";
import CardMovie from "@/components/CardMovie";
import { Skeleton } from 'primereact/skeleton';
        

function popularPage() {
  const [specificPopularMovies, setSpecificPopularMovies] = useState<any[]>([]);
  const params:{page:string} = useParams();
  const page = parseInt(params.page, 10);

  useEffect(() => {
    const fetchSpecificPopularMoviesData = async () => {
      try {
        const data = await getSpecificPopularMovies(page);
        setSpecificPopularMovies(data.results);
      } catch (error: any) {
        console.error("Error fetching popular movies:", error.message);
      }
    };

    fetchSpecificPopularMoviesData();
  }, [page]);

  return (
    <div className="movie-page-container">
      <h1 className="titre-center">Notre sélection de film populaire</h1>
      <div className="pagination">
        <PaginationButton direction={"left"} newPage={page - 1} cat={"popular"}/>
        <p>{page}</p>
        <PaginationButton direction={"right"} newPage={page + 1} cat={"popular"}/>
      </div>
      {specificPopularMovies && specificPopularMovies.length > 0  ? (
        <div className="movie-container">
          {specificPopularMovies.map((movie, index) => (
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
      <div className="pagination">
        <PaginationButton direction={"left"} newPage={page - 1} cat={"popular"}/>
        <p>{page}</p>
        <PaginationButton direction={"right"} newPage={page + 1} cat={"popular"}/>
      </div>
    </div>
  );

}

export default popularPage;
