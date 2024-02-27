import axios from 'axios'

const URL = 'https://mock-api.driven.com.br/api/v8/cineflex';

function getMovies() {
    const promise = axios.get(`${URL}/movies`);
    return promise;
}

function getShowTimes(movieId) {
    const promise = axios.get(`${URL}/movies/${movieId}/showTimes`);
    return promise;
}

function getSeats(showtimeId) {
    const promise = axios.get(`${URL}/showtimes/${showtimeId}/seats`);
    return promise;
}

function postBooking(object) {
    const promise = axios.post(`${URL}/seats/book-many`, object);
    return promise;
}

export { getMovies, getShowTimes, getSeats, postBooking };