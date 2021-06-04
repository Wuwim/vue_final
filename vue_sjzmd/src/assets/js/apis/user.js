import {axios} from "../config.js" //导入axios

//注册
async function reg(params){  //定义异步函数
    try{ 
        let result = await axios.post("/user/reg",params); //uname  upwd        
        return result.data;
    }catch(err)
    {   //返回Json数据格式要与result.data一致     
        return {code:-1,msg:"异步调用出错了，错误信息：" + err};
    }
}

//登录
async function Login(params){  //定义异步函数
    try{ 
        let result = await axios.post("/user/login",params); //uname  upwd        
        return result.data;
    }catch(err)
    {   //返回Json数据格式要与result.data一致     
        return {code:-1,msg:"异步调用出错了，错误信息：" + err};
    }
}

//退出
async function Logout(){  
    try{ 
        let result = await axios.get("/user/logout");         
        return result.data;
    }catch(err)
    {   //返回Json数据格式要与result.data一致     
        return {code:-1,msg:"异步调用出错了，错误信息：" + err};
    }
}

export {reg,Login,Logout}    //导出接口名