import {useParams, useSearchParams} from "react-router-dom";
import React, {FC, useEffect, useState} from "react";

import {IMovie} from "../../../interface";
import {searchService} from "../../../service";
import {Movies} from "../../MoviesContainer";



interface IProps {

    word:string
}

const SearchContainer:FC<IProps> = ({word}) => {
    const {ids}=useParams();

    const [movie, setMovie] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');


    useEffect(() => {
        searchService.getBySearch(word, page).then(({data})=>setMovie(data.results))
    }, [word, page]);
    console.log('movie', movie);


    console.log(ids);
    return (
        <div>
            <Movies page={page} movies={movie} setQuery={setQuery} />
        </div>
    );
};

export {SearchContainer};