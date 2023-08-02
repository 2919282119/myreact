import axios from 'axios';
function ajax(url, data = {}, type = 'GET') {
    return new Promise((resolve, reject) => {
        let promise;
        // 1. 执行异步ajax请求
        if (type === 'GET') { //发GET请求
            promise = axios.get(url, { //配置对象
                params: data //指定请求参数
            });
        } else { // 发POST请求
            promise = axios.post(url, data);
        }
        promise.then(response => { //2.如果成功了, 调用resolve(value)
            resolve(response.data);
        }).catch(error => { //3.如果失败,不调用reject(reason), 而是提示异常信息。
            // reject(error)
            console.log('请求出错了: ' + error.message)
        })
    });
}

export const reqdoSQL = (params) => {
    if (params.nodetype === undefined) params.nodetype='datagrid'; 
    const paramvalues = JSON.stringify(params);
    //var url = '/myServer/doSQL?paramvalues='+encodeURIComponent(paramvalues);
    var url = 'http://localhost:8080/myServer/doSQL?paramvalues='+encodeURIComponent(paramvalues);
    return ajax(url, {}, 'POST');
  }