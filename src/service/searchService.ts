import {apiService, IRes} from "./apiService";

import {IData} from "../interface";
import {urls} from "../constans";

const searchService={
    getBySearch:(query:string, page:string):IRes<IData>=>apiService.get(urls.search, {params:{query, page}})
}
export {searchService}