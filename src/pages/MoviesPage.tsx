import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {movieService} from "../service";

import {IMovie} from "../interface";
import {Movies} from "../components";


const MoviesPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page:'1'});
    const page=query.get('page');


    useEffect(() => {
        movieService.getAll(page).then(({data:{results}})=>setMovies(results))
    }, [page]);

    return (
        <div>
            <Movies page={page} movies={movies} setQuery={setQuery}/>
        </div>
    );
};

export {MoviesPage};