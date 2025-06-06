//mock
//引入axios
import axios from 'axios';
//引入进度条
import nProgress from 'nprogress';
//引入进度条的样式
import 'nprogress/nprogress.css';
 
//1:利用axios对象的方法create，去创建一个axios实例
//2:request就是axios，只不过稍微配置一下
const mockRequests = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径当中会出现api
    baseURL:"/mock",
    //代表请求超时的时间5s
    timeout:5000,
 
});
//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出之前做一些事情
mockRequests.interceptors.request.use((config)=>{
    //进度条开始动
    nProgress.start();
    //config：配置对象，对象里面有一个属性很重要，headers请求头
    return config;
});
 
//响应拦截器
mockRequests.interceptors.response.use((res)=>{
     //进度条结束
     nProgress.done();
    //成功的回调函数，服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
    return res.data;
}),(error=>{
    //响应失败的回调函数
    return Promise.reject(new Error('false'));//(终止Promise)
});
 
 
//（将axios对象requests）对外暴露
export default mockRequests;