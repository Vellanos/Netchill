import React from "react";
import { Card } from "primereact/card";
import Image from "next/image";
import Link from "next/link";
import defaultImage from "../../public/defaut.jpeg";

export default function CardMovie({ title, imagePath, id } : {title:string, imagePath:string, id:string}) {
  return (
    <Link href={`/movie/${id}`}>
      <Card title={title} className="card-movie">
        <Image
          src={imagePath ? `https://www.themoviedb.org/t/p/original/${imagePath}` : defaultImage}
          className="carousel-image"
          alt={title}
          width={250}
          height={400}
        />
      </Card>
    </Link>
  );
}
