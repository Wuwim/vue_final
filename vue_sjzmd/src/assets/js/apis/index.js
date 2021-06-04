import {axios} from "../config.js"
function getIndex(){
    return new Promise(function(reslove){
        axios.get("/index").then(res => {
            // console.log(res.data.recommendedItems);
            reslove(res.data)
        });
    })
}


export{getIndex}