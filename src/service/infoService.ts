import {apiService, IRes} from "./apiService";

import {IInfo} from "../interface";
import {urls} from "../constans";

const infoService={
    getById:(id:string):IRes<IInfo> => apiService.get(urls.info.byId(+id))
}

export {
    infoService
}