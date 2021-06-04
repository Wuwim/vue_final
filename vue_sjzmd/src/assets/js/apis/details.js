// import axios from "axios"
// import {baseURL} from "../config.js"
// axios.defaults.withCredentials = true;
import {axios} from "../config.js"
function getDetails(lid){
    return new Promise(
        function(resolve){
            axios.get("/product/detail1",{params:{lid}})
            .then(result=>{
                resolve(result.data);
            });
        }
    )
}

export {
    getDetails
}