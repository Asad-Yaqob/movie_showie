import React from "react";

const MovieCard = ({movie}) => {
  return (
    <div className="rounded overflow-hidden shadow-2xl cursor-pointer w-72 mb-6 bg-white">
      <div>
        <img
          className="w-full h-[320px] rounded-b-2xl object-fill"
          src={movie.image_thumbnail_path}
          alt="card-image"
        ></img>
      </div>
      <div className="pt-2 pb-2">
        <h2 className="font-bold text-2xl text-center">{movie.name}</h2>

        <div className="pt-4 px-5">
          <div className="flex gap-4 justify-center">
            <p className="font-bold">Status </p>
            <p className="font-bold">Network </p>
            <p className="font-bold">Country </p>
          </div>

          <div className="flex gap-10 justify-center pt-2">
            <p>{movie.status}</p>
            <p>{movie.network}</p>
            <p>{movie.country}</p>
          </div>
        </div>
      </div>
      </div>
  );
};

export default MovieCard;
