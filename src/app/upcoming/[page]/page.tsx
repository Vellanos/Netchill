"use client";
import { useParams } from "next/navigation";
import { getSpecificUpcomingMovies } from "@/app/lib/api_request";
import { useEffect, useState } from "react";
import PaginationButton from "@/components/PaginationButton";
import CardMovie from "@/components/CardMovie";
import { Skeleton } from 'primereact/skeleton';
        

function ratedPage() {
  const [specificUpcomingMovies, setSpecificUpcomingMovies] = useState<any[]>([]);
  const params:{page:string} = useParams();
  const page = parseInt(params.page, 10);

  useEffect(() => {
    const fetchSpecificUpcomingMoviesData = async () => {
      try {
        const data = await getSpecificUpcomingMovies(page);
        setSpecificUpcomingMovies(data.results);
      } catch (error: any) {
        console.error("Error fetching upcoming movies:", error.message);
      }
    };

    fetchSpecificUpcomingMoviesData();
  }, [page]);

  return (
    <div className="movie-page-container">
      <h1 className="titre-center">Les prochaines sorties</h1>
      <div className="pagination">
        <PaginationButton direction={"left"} newPage={page - 1} cat={"upcoming"}/>
        <p>{page}</p>
        <PaginationButton direction={"right"} newPage={page + 1} cat={"upcoming"}/>
      </div>
      {specificUpcomingMovies && specificUpcomingMovies.length > 0  ? (
        <div className="movie-container">
          {specificUpcomingMovies.map((movie, index) => (
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
        <PaginationButton direction={"left"} newPage={page - 1} cat={"upcoming"}/>
        <p>{page}</p>
        <PaginationButton direction={"right"} newPage={page + 1} cat={"upcoming"}/>
      </div>
    </div>
  );

}

export default ratedPage;
