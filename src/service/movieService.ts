import {apiService, IRes} from "./apiService";

import {urls} from "../constans";
import {IData} from "../interface";

const movieService={
    getAll:(page:string):IRes<IData> => apiService.get(urls.movies, {params:{page}})
}

export {
    movieService
}