import { useQuery } from '@tanstack/react-query'
import http from '../utils/http'
import { API_ENDPOINT } from '../utils/api-endpoint'

// setting pertama untuk hit API
const fetchDataMovie = async (queryKey) => {
    // untuk handle API
    // V3
    // const {data} = await http.get(`${API_ENDPOINT.NOW_PLAYING}?page=${ page ? page : 1 }`)
    // V4
    const [_key, _param] = queryKey;
    const { data } = await http.get(_key, { params: _param });
    return data
}

// untuk dinamis handle
const useMovieDataQuery = (options) => {
    // V3
    // return useQuery(["userData", page], () => fetchDataMovie(page));
    // V4
    return useQuery([API_ENDPOINT.NOW_PLAYING, options], fetchDataMovie());
}

export {fetchDataMovie, useMovieDataQuery}