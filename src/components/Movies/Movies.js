import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import '../../static/Movies.css'
import Movie from './Movie'


class Movies extends PureComponent {
    
    constructor (props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {filter_movies:[]};
    }

    componentDidMount() {
        this.props.fetchMovies();
        
    }    

    searchMethod(input) {
        if ( !input) {return};
        this.setState({filter_movies: this.props.allMovies.filter(
            (movie) => movie.title.toLowerCase().includes(input.value.toLowerCase()))}
        );
    }

    render() {
        return [
            <div className="Movies">
                <div className="Movies__input">
                    <label>
                        <input onChange={(input) => {
                            this.searchMethod(this.textInput.current)
                        }} type="text" ref={this.textInput} placeholder="Search movie" />
                    </label>
                </div>
                { this.state.filter_movies.length ? this.state.filter_movies.map((movie, index) => <Movie movie={movie} key={ index } />):
                this.props.allMovies.map((movie, index) => <Movie movie={movie} key={ index } />)}
            </div>
        ]
    }
}

export default connect(
    state => ({
        allMovies: state.moviedb.movies || [],
        error: state.moviedb.error,
    }),
    dispatch => ({
        fetchMovies: () => dispatch({ type: 'MOVIE_API_REQUEST' })
    })
)(Movies)
