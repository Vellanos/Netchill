import React from "react";
import { Card } from "primereact/card";
import Image from "next/image";

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
          src={`https://www.themoviedb.org/t/p/original/${imagePath}`}
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
