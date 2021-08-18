import { call, put, takeLatest } from "redux-saga/effects"
import axios from "axios"
import { FEATURED_API } from "../services/config"
import { uniqBy } from "lodash"


export function* watcherSaga() {
    yield takeLatest("MOVIE_API_REQUEST", fetchApiSaga)
}

function fetchMovies(page) {
    return axios.get(FEATURED_API);
}


function* fetchApiSaga() {
    try {
        let movies = [],
            page = 1,
            response
        
        do {
            response = yield call(fetchMovies, page)
            movies = uniqBy([ ...movies, ...response.data.results ], "title")
            page++ 
        } while (page <= response.data.total_pages)

        yield [
            put({ type: "MOVIE_API_SUCCESS_MOVIES", movies }),
        ]
    } catch (error) {
        yield put({ type: "MOVIE_API_ERROR", error })
    }
}
