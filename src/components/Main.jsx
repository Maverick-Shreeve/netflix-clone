import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)]; // this chooses a random movie

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //   console.log(movie);  this line was for testing

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className='w-full h-[500px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[700px] bg-gradient-to-r from-black'></div>  {/* bg-gradient gives the picture a fade from left to right  */}
        
        <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} // SRC IS PASTED FROM MOVIE DATABASE API, backdrop shows the image
          alt={movie?.title}
        />
        <div className='absolute w-full top-[20%] p-4 md:p-8'> {/* the top 20% moves the 2 buttons up on the screen, the md is a simple way to make page better at diffrent sizes like mobile  */}
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border bg-red-600 text-black border-gray-300 py-2 px-4'>
              Play
            </button>
            <button className='border text-white border-gray-400 py-2 px-5 ml-4'>
              Watch Later
            </button>
          </div>
          <p className='text-gray-400 text-md'>
            Released: {movie?.release_date}
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-300'> {/* these are breapoint for scaling the page  */}
            {truncateString(movie?.overview, 170)} {/* the description can be 170 words max , using the truncate string from above */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;