import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ result }) {
  const formattedRating = result.vote_average.toFixed(1);

  return (
    <div className="group cursor-pointer hover:shadow-lg rounded-lg overflow-hidden border border-gray-200 m-2">
      <Link href={`/movie/${result.id}`}>
        <div className="relative">
          <Image
            src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
            alt={result.title || result.name}
            width={500}
            height={300}
            className="object-cover transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2">
            <p className="text-white text-sm">{formattedRating}/10</p> {}
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/movie/${result.id}`}>
          <p className="text-lg font-semibold cursor-pointer hover:text-gray-700">{result.title || result.name}</p>
        </Link>
        <p className="text-gray-600 text-sm mt-1 mb-3">{result.release_date || result.first_air_date}</p>
        <p className="flex items-center text-gray-600 text-sm">
          <FiThumbsUp className="mr-1" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
