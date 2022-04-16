# await 和 .then 的区别
\_ await 不用保存当前的堆栈信息，速度更快，更节省内存

\_ await 内部的阻塞都在Promise对象中异步执行了，async 直接返回一个Promise
    对象

# Promise 的 resolved 与 pending 状态的区别？
\_ async 函数，返回一个 Promise 对象
    如果在函数中 return 一个直接量
    async 会把这个直接量通过 Promise.resolve() 封装成 Promise 对象。

\_ Resolved，完成状态

\_ Pending，进行状态，表示延迟（异步）操作正在进行

\_ .then(), 返回的结果，正等待你接收数据

# promise 的 try catch
\_ 同步的异常捕获
try {
    throw new error(666)
} catch(err) {
    console.error('err', err)
}

\_ 异步的异常捕获
async function fn() {
    let n = Promise.reject(6666);

    try {
        await n;
    } catch(err) {
        console.error('err', err)
    }
}
