import React from "react";

export default function Herobanner(props: any) {
  const url_bg = props.bgHeroBanner;
  return (
    <div className="herobanner-container">
      <div
        className="herobanner"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${url_bg})`,
        }}
      >
        <div className="herobanner-text-container">
            <h1>Bienvenue sur <span className="color-red">Netchill</span></h1>
            <p>Le meilleure contenu pour <span>Chill !</span></p>
        </div>
      </div>
    </div>
  );
}
