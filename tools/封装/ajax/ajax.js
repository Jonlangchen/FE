function queryData(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState != 4) return;
            if(xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.responseText);
            }else {
                reject('服务器错误');
            }
        }
        xhr.open('get', url);
        xhr.send(null);
    })
}

var getJSON = function(url) {
    const promise = new Promise(function(resolve, reject) {
        function handler() {
            if(this.readyState !== 4) {
                return;
            }
            if(this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText))
            }
        };
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onreadystatechange = handler;
        xhr.responseType = "json";
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send();
    });
    return promise;
}
// getJSON('http://localhost:3000/json').then(function(json) {
//     console.log('Contents:', json)
// }, function(err) {
//     console.error('出错了', err)
// })