import React from "react";
import { Card } from "primereact/card";
import Image from "next/image";

export default function CardMovie({ title, imagePath }) {
  return (
    <>
      <Card title={title} className="card-movie">
        <Image
          src={`https://www.themoviedb.org/t/p/original/${imagePath}`}
          className="carousel-image"
          alt={title}
          width={250}
          height={400}
        />
      </Card>
    </>
  );
}
