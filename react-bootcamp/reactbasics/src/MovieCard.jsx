import React from 'react'
import "./MovieCard.css"
import Poster from "../src/assets/movieposter.jpg"

const MovieCard = (props) => {
    const {movieTitle, moviePoster} = props
    return (
        <div className='card'>
            <div className='card-img-container'>
                <img src={moviePoster} alt='no-img' />
            </div>
            <div className="card-container">
                <h4>{movieTitle}</h4>
                <p></p>
            </div>
        </div>
    )
}

export default MovieCard
