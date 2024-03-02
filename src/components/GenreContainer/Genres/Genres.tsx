import {useEffect, useState} from "react";

import {IGenres} from "../../../interface";
import {genresServise} from "../../../servises";
import {Genre} from "../Genre";

import css from './Genres.module.css'

const Genres = () => {
    const [genres, setGenres] = useState<IGenres[]>([])
    useEffect(() => {
        genresServise.getAll().then(({data})=>setGenres(data.genres))
    }, []);
    return (
        <div className={css.genres_wrap}>
            {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};