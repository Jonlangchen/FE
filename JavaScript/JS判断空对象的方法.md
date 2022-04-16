# JS判断空对象的方法
\_ Object.getOwnPropertyNames
    获取到对象中的属性名，存到一个数组中
    【3】 判断取得数组的长度
 
\_ Object.keys(obj)
    获取给定对象的所有可枚举属性的字符串数组
    【4】判断取得数组的长度

\_ hasOwnProperty
    检测属性是否存在对象实例中(可枚举属性)
    如果存在则返回 true
    不存在则返回 false
    【5】 if(obj.hasOwnProperty(_key)) {}

// 【1】能判断一般不用
JSON.stringify(obj) === '{}'

// 【2】
let _fn = (_d) {
    for(let _key in _d) {
        return false
    }
    return true
}