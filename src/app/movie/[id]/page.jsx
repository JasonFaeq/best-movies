import Image from 'next/image';
import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
  const movie = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          width={1920}
          height={1080}
          alt={movie.title || movie.name}
          className="w-full"
        />
        <div className="p-4">
          <h2 className="text-gray-700 text-2xl font-semibold mb-2">{movie.title || movie.name}</h2>
          <p className="text-gray-700 mb-4">{movie.overview}</p>
          <div className="flex items-center text-gray-600">
            <FiThumbsUp className="mr-2" />
            <p>{movie.vote_count}</p>
          </div>
          <p className="mt-2">
            <span className="text-gray-700 font-semibold ">Release Date:</span> <span className='text-gray-700'>{movie.release_date || movie.first_air_date}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
