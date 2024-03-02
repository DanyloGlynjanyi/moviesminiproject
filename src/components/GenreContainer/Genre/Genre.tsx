import {FC} from "react";
import {NavLink} from "react-router-dom";

import {IGenres} from "../../../interface";
import css from './Genre.module.css'

interface IProps {
    genre: IGenres

}

const Genre: FC<IProps> = ({genre}) => {
    const {name, id} = genre;
    return (
        <div>
            <NavLink to={`/genres/${id}`} className={css.genre_button}> {name}</NavLink>
        </div>)


};

export {Genre};