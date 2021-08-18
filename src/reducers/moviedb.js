const initialState = {
    error: null,
    loading: false,
    movies: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'MOVIE_API_REQUEST':
            return { ...state, loading: true, error: null }
        case 'MOVIE_API_SUCCESS_MOVIES':
            return { ...state, loading: false, movies: action.movies }
        case 'MOVIE_API_ERROR':
            return { ...state, loading: false, error: action.error, movies: null }
        default:
            return state
    }
}