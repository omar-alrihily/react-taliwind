import React from 'react'

const path= 'https://image.tmdb.org/t/p/original'

function MovieCard({ movie }) {
  return (
    
    <div class="rounded overflow-hidden shadow-lg grid ">
        <img src={path+movie.poster_path} alt={movie.title} />

        <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{movie.title}</div>
        <p class="text-gray-700 text-base">
    {movie.overview}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{movie.vote_average}</span>
   
  </div>
</div>
        
  
    






   
  )
}

export default MovieCard