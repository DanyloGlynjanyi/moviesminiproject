import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {IMovie} from "../../interface";
import {genresServise} from "../../servises";
import {Movies} from "../MoviesContainer";




const GenreLists = () => {
    const [moviesGenre, setMoviesGenre] = useState<IMovie[]>([])
    const {id}=useParams<string>()
    const [query, setQuery] = useSearchParams({page:'1'});
    const page=query.get('page');

    useEffect(() => {
        genresServise.getByIdMovie(page, id).then(({data:{results}})=>setMoviesGenre(results))
    }, [page, id]);




    return (
        <div>
            <Movies  page={page} movies={moviesGenre} setQuery={setQuery}/>
        </div>
    );
};

export {GenreLists};
