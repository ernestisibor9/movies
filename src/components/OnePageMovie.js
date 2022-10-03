import React from "react";
import { useParams } from "react-router-dom";
import movie_data from "../inc/movie_data";


function OnePageMovie() {
  const { id } = useParams();

  // Find single movie
  const myMovie = movie_data.find((oneMovie)=> oneMovie.id === Number(id))
  const{movie_title, photo, category} = myMovie

  console.log(myMovie);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div class="card mb-3">
            <img src={photo} class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title">MOVIE TITLE: {movie_title}</h3>
              <h3 class="card-title">CATEGORY: {category}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnePageMovie;
