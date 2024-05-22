import React from "react";
import { Card } from "primereact/card";
import Image from "next/image";
import defaultImage from "../../public/defaut.jpeg";

export default function MovieDetails({
  title,
  imagePath,
  overview,
  note,
}: {
  title: string;
  imagePath: string;
  overview: string;
  note: number;
}) {
  return (
    <div className="card-details-container">
      <Card title={title} className="card-details">
        <Image
          src={imagePath ? `https://www.themoviedb.org/t/p/original/${imagePath}` : defaultImage}
          className="carousel-image"
          alt={title}
          width={250}
          height={400}
        />
        <p className="m-0">{overview}</p>
        <div>
          <p>Note des utilisateurs : </p>
          <p className="m-0">{parseFloat(note.toFixed(1))} / 10</p>
        </div>
      </Card>
    </div>
  );
}
