import React, { useState } from 'react'
import movie_data from '../inc/movie_data'
import SingleMovie from './SingleMovie';

function Movie() {

const[movies, setMovies] = useState(movie_data)
console.log(movies);
    
  return (
    <div className='container'>
        <div className='row'>
        {
            movies.map((movie_item)=>{
                return(
                    <div className='col-md-4'>
                        <SingleMovie movie_item ={movie_item}/>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Movie