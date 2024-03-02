import {axiosServise, IRes} from "./axiosServise";

import {IData} from "../interface";
import {urls} from "../constans";

const searchServise={
    getBySearch:(query:string, page:string):IRes<IData>=>axiosServise.get(urls.search, {params:{query, page}})
}
export {searchServise}