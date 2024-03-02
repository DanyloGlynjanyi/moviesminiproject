// import {FC} from "react";
// import {SetURLSearchParams} from "react-router-dom";
//
//
// import {IMovie} from "../../../interfases";
// import {Movie} from "../Movie";
//
// import css from './Movies.module.css'
// import {Pagination} from "@mui/material";
//
//
// interface IProps{
//     movies: IMovie[],
//     page: string,
//     setQuery: SetURLSearchParams
// }
//
// const Movies:FC<IProps> = ({movies,setQuery,page}) => {
//
//     const prev = () => {
//         setQuery(prev=>{
//             prev.set('page', `${+prev.get('page')-1}`)
//             return prev
//         })
//     };
//     const next = () => {
//         setQuery(prev=>{
//             prev.set('page', `${+prev.get('page')+1}`)
//             return prev
//         })
//     };
//
//     return (
//         <div>
//             <div className={css.Wrap}>{movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
//             </div>
//             <div className={css.Movies_button_div}>
//                 {/*<button className={css.Movies_button} disabled={page==='1'} onClick={prev}>prev</button>*/}
//                 {/*<div className={css.Movies_page_number}>{page}</div>*/}
//                 {/*<button className={css.Movies_button} disabled={page==='500'} onClick={next}>next</button>*/}
//                 <Pagination count={10} shape="rounded" />
//                 {/*<Pagination count={10} variant="outlined" shape="rounded" />*/}
//             </div>
//         </div>
//     );
// };
//
// export {Movies};
import React, {FC} from "react";
import {SetURLSearchParams} from "react-router-dom";
import {IMovie} from "../../../interface";
import {Movie} from "../Movie";
import css from './Movies.module.css'
import {Pagination} from "@mui/material";

interface IProps{
    movies: IMovie[],
    page: string,
    setQuery: SetURLSearchParams
}

const Movies: FC<IProps> = ({movies, setQuery, page}) => {

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setQuery(prev => {
            prev.set('page', `${value}`);
            return prev;
        });
    };

    return (
        <div>
            <div className={css.Wrap}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.Movies_button_div}>
                <Pagination
                    count={500}
                    page={parseInt(page)}
                    shape="rounded"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export {Movies};
