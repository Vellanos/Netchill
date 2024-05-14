"use client";
import { useParams } from "next/navigation";
import { getSpecificPopularMovies } from "@/app/lib/api_request";
import { useEffect, useState } from "react";
import PaginationButton from "@/components/PaginationButton";
import CardMovie from "@/components/CardMovie";

function popularPage() {
  const [specificPopularMovies, setSpecificPopularMovies] = useState<any[]>([]);
  const params = useParams();
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
      <h1>TEST</h1>
      <div className="pagination">
        <PaginationButton direction={"left"} newPage={page - 1}/>
        <p>{page}</p>
        <PaginationButton direction={"right"} newPage={page + 1}/>
      </div>
      <div className="movie-container">
        {specificPopularMovies.map((movie, index) => (
          <CardMovie
            key={index}
            title={movie.title}
            imagePath={movie.poster_path}
          />
        ))}
      </div>
      <div className="pagination">
        <PaginationButton direction={"left"} newPage={page - 1}/>
        <p>{page}</p>
        <PaginationButton direction={"right"} newPage={page + 1}/>
      </div>
    </div>
  );
}

export default popularPage;
