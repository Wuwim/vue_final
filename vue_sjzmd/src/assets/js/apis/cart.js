import {axios} from "../config.js" //导入axios

//获取商品列表
async function addCart(params){  
    try{ 
        let result = await axios.post("/cart/add",params);   //post调用可以这样传递参数
        return result.data;
    }catch(err)
    {   //返回Json数据格式要与result.data一致     
        return {code:-1,msg:"异步调用出错了，错误信息：" + err};
    }
}
async function deleteCart(params){  
    try{ 
        let result = await axios.get("/cart/del",{params});   //{params:{}}   可选参数kw pno  pageSize   
        return result.data;
    }catch(err)
    {   //返回Json数据格式要与result.data一致     
        return {code:-1,msg:"异步调用出错了，错误信息：" + err};
    }
}
async function listCart(){  
    try{ 
        let result = await axios.get("/cart/list");  
        return result.data;
    }catch(err)
    {   //返回Json数据格式要与result.data一致     
        return {code:-1,msg:"异步调用出错了，错误信息：" + err};
    }
}
async function cartUpdateCount(params){  
    try{ 
        let result = await axios.get("/cart/updatecount",{params});  
        return result.data;
    }catch(err)
    {   //返回Json数据格式要与result.data一致     
        return {code:-1,msg:"异步调用出错了，错误信息：" + err};
    }
}
async function cartUpdateCounti(params){  
    try{ 
        let result = await axios.get("/cart/updatecounti",{params});  
        return result.data;
    }catch(err)
    {   //返回Json数据格式要与result.data一致     
        return {code:-1,msg:"异步调用出错了，错误信息：" + err};
    }
}
async function cartUpdateCountd(params){  
    try{ 
        let result = await axios.get("/cart/updatecountd",{params});  
        return result.data;
    }catch(err)
    {   //返回Json数据格式要与result.data一致     
        return {code:-1,msg:"异步调用出错了，错误信息：" + err};
    }
}

export {addCart,deleteCart,listCart,cartUpdateCount,cartUpdateCounti,cartUpdateCountd}    //导出接口名