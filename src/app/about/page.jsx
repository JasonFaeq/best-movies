import React from 'react';

export default function About() {
  return (
    <div className='p-10'>
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-amber-600 dark:text-amber-400">About Us</h1>
        <p className="mb-6 text-lg text-gray-900 dark:text-gray-300">
            Welcome to <span className="font-semibold">Best Movies</span>, your ultimate destination for discovering and exploring the greatest films of all time. Our mission is to celebrate the magic of cinema by curating an extensive database of movies that have left an indelible mark on audiences and critics alike.
        </p>
        
        <h2 className="text-2xl font-medium mb-3 text-amber-600 dark:text-amber-400">Our Mission</h2>
        <p className="mb-6 text-lg text-gray-900 dark:text-gray-300">
            At <span className="font-semibold">Best Movies</span>, we believe that great films transcend time and culture, offering stories that resonate with people from all walks of life. Whether you’re a casual moviegoer or a passionate cinephile, our platform is designed to provide you with a comprehensive and enjoyable movie-watching experience.
        </p>
        
        <h2 className="text-2xl font-medium mb-3 text-amber-600 dark:text-amber-400">What We Offer</h2>
        <ul className="list-disc pl-5 mb-6 text-lg text-gray-900 dark:text-gray-300">
            <li className="mb-2">
            <span className="font-semibold">Extensive Movie Database:</span> Dive into our carefully curated collection of films, featuring timeless classics, modern masterpieces, and hidden gems from around the world.
            </li>
            <li className="mb-2">
            <span className="font-semibold">Detailed Information:</span> Each movie entry includes essential details such as cast and crew, plot summaries, genres, release dates, and much more.
            </li>
            <li className="mb-2">
            <span className="font-semibold">User Reviews and Ratings:</span> Join our community of movie enthusiasts by sharing your thoughts and ratings for each film. See what others have to say and engage in lively discussions.
            </li>
            <li className="mb-2">
            <span className="font-semibold">Personalized Recommendations:</span> Based on your viewing history and preferences, we provide tailored movie suggestions to enhance your film-watching journey.
            </li>
            <li className="mb-2">
            <span className="font-semibold">Latest News and Updates:</span> Stay informed with the latest news in the film industry, including upcoming releases, reviews, and exclusive interviews.
            </li>
        </ul>
        
        <h2 className="text-2xl font-medium mb-3 text-amber-600 dark:text-amber-400">Why We Love Movies</h2>
        <p className="mb-6 text-lg text-gray-900 dark:text-gray-300">
            Movies have the power to transport us to different worlds, evoke a range of emotions, and inspire us to see life from new perspectives. At <span className="font-semibold">Best Movies</span>, we are passionate about celebrating this art form and fostering a community where everyone can share their love for cinema.
        </p>
        
        <p className="text-lg text-center text-gray-900 dark:text-gray-300">
            Thank you for visiting <span className="font-semibold">Best Movies</span>. We hope you enjoy exploring our site and discovering your next favorite film. Lights, camera, action—let’s embark on this cinematic adventure together!
        </p>
        </div>
    </div>
  );
}
