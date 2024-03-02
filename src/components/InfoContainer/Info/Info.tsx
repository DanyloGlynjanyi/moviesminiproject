import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {infoServise} from "../../../servises";
import {InfoMovieDat} from "../InfoMovieDat";
import {IInfo} from "../../../interface";

const Info = () => {
    const {id}=useParams<string>()
    const [info, setInfo] = useState<IInfo>(null)
    useEffect(() => {
        infoServise.getById((id)).then(({data})=>setInfo(data))
    }, [id]);
    return (

        <div>
            {info && <InfoMovieDat key={id} info={info}/>}
        </div>
    );
};

export {Info};