import React, { PureComponent } from 'react'
import '../../static/Movies.css'
import { IMG_API } from '../../services/config'


class Movie extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    render() {
        const {
            movie
        } = this.props

        return (
            <div className="movie">
                <img src={IMG_API + movie.poster_path} alt={movie.title} />
                <div className="movie-info">
                    <h2>{movie.title}</h2>
                    <span>{movie.vote_average}</span>
                </div>
                <div className="movie-over">
                    <h3>Overview:</h3>
                    <p>{movie.overview}</p>
                </div>
            </div>
        );
    }
}

export default Movie
