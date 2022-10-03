import React from 'react'
import { Link } from 'react-router-dom'

function SingleMovie({movie_item}) {
    const{movie_title, category, id, photo} = movie_item
  return (
    <div className='shadow p-3 mb-5 bg-body rounded mt-5' style={{textAlign:'center'}}>
        <img src={photo} alt={movie_title} width={300} height={290} className = 'pt-3'/>
        <h5 className='mt-2'>MOVIE TITLE : {movie_title}</h5>
        <h5>CATEGORY : {category}</h5>
        <Link to = {`/movie/${id}`} className='btn btn-primary'>View Movie</Link>
    </div>
  )
}

export default SingleMovie