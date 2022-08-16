import { useEffect, useState} from 'react'


import MovieCard from './MovieCard'




import SearchIcon from './search.svg' ;



// https://api.themoviedb.org/3/movie/550?api_key=deb35bfd26b90f06f7bf12b48fd7855b


// https://api.themoviedb.org/3/search/movie?api_key=deb35bfd26b90f06f7bf12b48fd7855b&query=the+avengers



// Api key : 7c240aa8

//  const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=7c240aa8' ;


const API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=deb35bfd26b90f06f7bf12b48fd7855b' ;

/*

const movie1 = {
    "Title": "Superman Returns",
    "Year": "2006",
    "imdbID": "tt0348150",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
}



 {
            "adult": false,
            "backdrop_path": "/nNmJRkg8wWnRmzQDe2FwKbPIsJV.jpg",
            "genre_ids": [
                878,
                28,
                12
            ],
            "id": 24428,
            "original_language": "en",
            "original_title": "The Avengers",
            "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
            "popularity": 287.893,
            "poster_path": "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
            "release_date": "2012-04-25",
            "title": "The Avengers",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 27349
        }

*/

function App() {

   const  [movies, setMovies] = useState([]); 
   const [searchTerm , setSearchTerm] = useState('') ;



   const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&query=${title}`);
    const data = await response.json();

    console.log(data.results)

    setMovies(data.results);
  };



 
    useEffect(()=>{

        searchMovies();


    },[]);
  return (
    <div >

  


<h1>Omar Movies</h1>

<div className='search'>

    <input placeholder='search for movies' 
    value= {searchTerm}
    onChange={ (e)=> setSearchTerm(e.target.value) }   
     />

<img
     src={SearchIcon}
     alt='search'
     onClick={() => searchMovies(searchTerm)}
    
     />

</div>

{

    movies?.length > 0 
    ? (
         
        <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>


    {movies.map((movie)=>
    < MovieCard movie={movie} />
    
    )}


</div>   
    )  :

    (

        <div className='empty' >

            <h2>No movies found </h2>
        </div>
    )
}



    </div>
  )
}

export default App