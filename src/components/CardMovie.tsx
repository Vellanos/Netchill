import React from "react";
import { Card } from "primereact/card";
import Image from "next/image";
import Link from "next/link";

export default function CardMovie({ title, imagePath, id } : {title:string, imagePath:string, id:string}) {
  return (
    <Link href={`/movie/${id}`}>
      <Card title={title} className="card-movie">
        <Image
          src={`https://www.themoviedb.org/t/p/original/${imagePath}`}
          className="carousel-image"
          alt={title}
          width={250}
          height={400}
        />
      </Card>
    </Link>
  );
}
