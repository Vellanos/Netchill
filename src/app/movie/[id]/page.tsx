"use client";
import { useParams } from "next/navigation";
import { getDetailsMovie } from "@/app/lib/api_request";
import { useEffect, useState } from "react";
import MovieDetails from "@/components/MovieDetails";


function detailsPage() {
  const [detailsMovie, setDetailsMovie] = useState<any>(null);
  const params:{id:string} = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchDetailsMovieData = async () => {
      try {
        const data = await getDetailsMovie(id);
        setDetailsMovie(data);
      } catch (error: any) {
        console.error("Error fetching details movie:", error.message);
      }
    };

    fetchDetailsMovieData();
  }, [id]);

  console.log(detailsMovie);
  

  return (
    <>
      {detailsMovie ? 
        <MovieDetails
        title={detailsMovie.title}
        imagePath={detailsMovie.poster_path} 
        overview={detailsMovie.overview}
        note={detailsMovie.vote_average}
      />
        : 
        <p>Chargement ...</p>}
    </>
  );
}

export default detailsPage;
