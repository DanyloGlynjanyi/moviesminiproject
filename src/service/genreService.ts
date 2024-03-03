import {apiService, IRes} from "./apiService";
import {urls} from "../constans";
import {IData, IGenreList} from "../interface";

const genreService={
    getAll:():IRes<IGenreList>=>apiService.get(urls.genre),
    getByIdMovie:(page:string, with_genres:string):IRes<IData>=>apiService.get(urls.movies, {params:{page, with_genres}})
}
export {genreService}