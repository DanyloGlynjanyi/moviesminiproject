import {useForm} from "react-hook-form";
import {useState} from "react";

import {ISearchWord} from "../../../interface";
import {SearchContainer} from "../SearchContainer";

import css from "./SearchForm.module.css";



const SearchForm = () => {
    const {handleSubmit, reset, register} = useForm()
    const [word, setWord] = useState<string>('A')

    const search = (query: ISearchWord) => {
        setWord(query.word)
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input className={css.input} type="text" placeholder={'Movie'} {...register('word')}/>
                <button className={css.button}>Search</button>
            </form>
            <SearchContainer word={word}/>
        </div>
    );
};

export {SearchForm};


