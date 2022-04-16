// function ajax() {
//     var xhr = null;
//     if(window.XMLHttpRequest) { // 其他
//         xhr = new window.XMLHttpRequest();
//     } else { // ie 9+
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     // 建立连接
//     xhr.open('可变', '可变', true);

//     xhr.send('可变'); // 发送请求

//     // 监听
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4) { // 完毕且成功
//             if (xhr.status == 200) { 
//                 // 字符串或数据操作的地方
//                 var str = xhr.responseText;
//                 console.log(str);
//             }
//         }
//     }
// }


// function ajax(options) {
//     var xhr = null;
//     if(window.XMLHttpRequest) { // 其他
//         xhr = new window.XMLHttpRequest();
//     } else { // ie 9+
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     // 建立连接
//     var types = options.type.toLowerCase();
//     if (types == 'get') {
//         xhr.open(types, options.url, true);
//         xhr.send(null); // 发送请求
//     } else if (types == 'post') {
//         xhr.open(types, options.url, true);
//         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//         xhr.send(data); // 发送请求
//     } else {
//         console.log('传输方式错误')
//     }

//     // 监听
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4) { // 完毕且成功
//             if (xhr.status == 200) { 
//                 // 字符串或数据操作的地方
//                 var str = xhr.responseText;
//                 console.log(str);
//             }
//         }
//     }
// }

// // 参数 都是 数组 或json {a: 1}
// var obj = {type:'get', url:'data.json', data: {}}


// function ajax(options) {
//     var xhr = null;
//     if(window.XMLHttpRequest) { // 其他
//         xhr = new window.XMLHttpRequest();
//     } else { // ie 9+
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     // 建立连接
//     var types = options.type.toLowerCase();
//     if (types == 'get') {
//         xhr.open(types, options.url, true);
//         xhr.send(null); // 发送请求
//     } else if (types == 'post') {
//         var arr = [];
//         for (var key in options.data) {
//             arr.push(key+ "=" + options.data[key])
//         }
//         var datas = arr.join('&');

//         xhr.open(types, options.url, true);
//         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//         xhr.send(datas); // 发送请求
//     } else {
//         console.log('传输方式错误')
//     }

//     // 监听
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4) { // 完毕且成功
//             if (xhr.status == 200) { 
//                 // 字符串或数据操作的地方
//                 var str = xhr.responseText;
//                 console.log(str);
//             }
//         }
//     }
// }

// // 参数 都是 数组 或json {a: 1}
// var obj = {type:'get', url:'data.json', data: {}}




function createAjax() {
    var xhr = null;
    if(window.XMLHttpRequest) { // 其他
        xhr = new window.XMLHttpRequest();
    } else { // ie 9+
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
}
// 拼接字符串
function getValStr(dataObj) {
    var arr = [];
    for (var key in options.data) {
        arr.push(key+ "=" + options.data[key])
    }
    var datas = arr.join('&');

    return datas;
}
function ajax(options) {
    var xhr = createAjax();
    // 建立连接
    var types = options.type.toLowerCase();
    if (types == 'get') {
        xhr.open(types, options.url, true);
        xhr.send(null); // 发送请求
    } else if (types == 'post') {
        var datas = getValStr(options.data);

        xhr.open(types, options.url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(datas); // 发送请求
    } else {
        console.log('传输方式错误')
    }

    // 监听
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) { // 完毕且成功
            if (xhr.status == 200) { 
                // 字符串或数据操作的地方
                var str = xhr.responseText;
                console.log(str);
            }
        }
    }
}

// 参数 都是 数组 或json {a: 1}
// var obj = {type:'get', url:'data.json', data: {}}