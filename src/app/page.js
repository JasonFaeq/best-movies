import Results from '@/components/Results';
import React from 'react';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  let url;

  console.log('Search params:', searchParams);

  if (searchParams.genre && searchParams.genre.startsWith('fetch')) {
    url = getMoviesByDecadeUrl(searchParams.genre.slice(5));
  } else if (searchParams.genre === 'fetchTrending') {
    url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`;
  } else if (searchParams.genre === 'fetchTopRated') {
    url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  } else {
    // Default to fetching trending movies if no specific genre is specified
    url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`;
  }

  console.log('API URL:', url);

  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const results = data.results;
  console.log('Fetched results:', results);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}

function getMoviesByDecadeUrl(decade) {
  if (decade === 'Trending') {
    return `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`;
  } else if (decade === 'TopRated') {
    return `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  }

  const startYear = getStartYear(decade);
  const endYear = startYear + 9;
  return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_date.gte=${startYear}-01-01&primary_release_date.lte=${endYear}-12-31&language=en-US&page=1`;
}

function getStartYear(decade) {
  switch (decade) {
    case '1980s':
      return 1980;
    case '1990s':
      return 1990;
    case '2000s':
      return 2000;
    case '2010s':
      return 2010;
    case '2020s':
      return 2020;
    default:
      throw new Error('Invalid decade');
  }
}
